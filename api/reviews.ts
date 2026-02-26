import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getCached, setCached, rateLimit, withCacheHeaders, type Review } from "./_shared";

const GOOGLE_LOCATION_NAME = process.env.GOOGLE_LOCATION_NAME;
const GOOGLE_ACCESS_TOKEN = process.env.GOOGLE_ACCESS_TOKEN;
const ZILLOW_REVIEWS_API_URL = process.env.ZILLOW_REVIEWS_API_URL;
const ZILLOW_REVIEWS_API_KEY = process.env.ZILLOW_REVIEWS_API_KEY;

async function fetchGoogleReviews(): Promise<{ reviews: Review[]; aggregate?: { rating?: number; count?: number } }> {
  if (!GOOGLE_LOCATION_NAME || !GOOGLE_ACCESS_TOKEN) {
    return { reviews: [] };
  }
  const url = `https://mybusiness.googleapis.com/v4/${GOOGLE_LOCATION_NAME}/reviews`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${GOOGLE_ACCESS_TOKEN}` }
  });
  if (!res.ok) return { reviews: [] };
  const data = await res.json();
  const reviews: Review[] =
    (data.reviews || []).map((r: any) => ({
      source: "Google",
      authorName: r.reviewer?.displayName || "Google Reviewer",
      rating: r.starRating ? Number(r.starRating) : undefined,
      text: r.comment || "",
      date: r.updateTime || r.createTime,
      url: r.reviewReply?.reviewId ? `https://search.google.com/local/reviews?placeid=${r.reviewReply.reviewId}` : undefined
    })) || [];
  const aggregate = {
    rating: data.averageRating,
    count: data.totalReviewCount
  };
  return { reviews, aggregate };
}

async function fetchZillowReviews(): Promise<{ reviews: Review[]; aggregate?: { rating?: number; count?: number } }> {
  if (!ZILLOW_REVIEWS_API_URL || !ZILLOW_REVIEWS_API_KEY) return { reviews: [] };
  const res = await fetch(ZILLOW_REVIEWS_API_URL, {
    headers: { Authorization: `Bearer ${ZILLOW_REVIEWS_API_KEY}` }
  });
  if (!res.ok) return { reviews: [] };
  const data = await res.json();
  const reviews: Review[] =
    (data.reviews || []).map((r: any) => ({
      source: "Zillow",
      authorName: r.authorName || "Zillow Reviewer",
      rating: r.rating ? Number(r.rating) : undefined,
      text: r.text || "",
      date: r.date,
      url: r.url
    })) || [];
  const aggregate = {
    rating: data.averageRating,
    count: data.totalReviews
  };
  return { reviews, aggregate };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";
  const limit = rateLimit(ip, 30);
  if (!limit.allowed) {
    res.status(429).json({ error: "Rate limit exceeded" });
    return;
  }

  const cached = getCached<any>("reviews");
  if (cached) {
    res.setHeader("Cache-Control", "public, s-maxage=21600, stale-while-revalidate=3600");
    res.status(200).json(cached);
    return;
  }

  const [google, zillow] = await Promise.all([fetchGoogleReviews(), fetchZillowReviews()]);
  const data = {
    google,
    zillow,
    hasGoogle: google.reviews.length > 0,
    hasZillow: zillow.reviews.length > 0
  };
  setCached("reviews", data);
  const headers = withCacheHeaders({});
  Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
  res.status(200).json(data);
}
