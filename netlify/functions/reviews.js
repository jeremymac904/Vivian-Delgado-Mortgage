const { getCached, setCached, rateLimit, withCacheHeaders } = require("./_shared");

const GOOGLE_LOCATION_NAME = process.env.GOOGLE_LOCATION_NAME;
const GOOGLE_ACCESS_TOKEN = process.env.GOOGLE_ACCESS_TOKEN;
const ZILLOW_REVIEWS_API_URL = process.env.ZILLOW_REVIEWS_API_URL;
const ZILLOW_REVIEWS_API_KEY = process.env.ZILLOW_REVIEWS_API_KEY;

async function fetchGoogleReviews() {
  if (!GOOGLE_LOCATION_NAME || !GOOGLE_ACCESS_TOKEN) return { reviews: [] };
  const url = `https://mybusiness.googleapis.com/v4/${GOOGLE_LOCATION_NAME}/reviews`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${GOOGLE_ACCESS_TOKEN}` } });
  if (!res.ok) return { reviews: [] };
  const data = await res.json();
  const reviews =
    (data.reviews || []).map((r) => ({
      source: "Google",
      authorName: r.reviewer?.displayName || "Google Reviewer",
      rating: r.starRating ? Number(r.starRating) : undefined,
      text: r.comment || "",
      date: r.updateTime || r.createTime,
      url: r.reviewReply?.reviewId ? `https://search.google.com/local/reviews?placeid=${r.reviewReply.reviewId}` : undefined
    })) || [];
  return { reviews, aggregate: { rating: data.averageRating, count: data.totalReviewCount } };
}

async function fetchZillowReviews() {
  if (!ZILLOW_REVIEWS_API_URL || !ZILLOW_REVIEWS_API_KEY) return { reviews: [] };
  const res = await fetch(ZILLOW_REVIEWS_API_URL, { headers: { Authorization: `Bearer ${ZILLOW_REVIEWS_API_KEY}` } });
  if (!res.ok) return { reviews: [] };
  const data = await res.json();
  const reviews =
    (data.reviews || []).map((r) => ({
      source: "Zillow",
      authorName: r.authorName || "Zillow Reviewer",
      rating: r.rating ? Number(r.rating) : undefined,
      text: r.text || "",
      date: r.date,
      url: r.url
    })) || [];
  return { reviews, aggregate: { rating: data.averageRating, count: data.totalReviews } };
}

exports.handler = async function handler(event) {
  const ip = (event.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  const limit = rateLimit(ip, 30);
  if (!limit.allowed) {
    return { statusCode: 429, body: JSON.stringify({ error: "Rate limit exceeded" }) };
  }

  const cached = getCached("reviews");
  if (cached) {
    return {
      statusCode: 200,
      headers: withCacheHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify(cached)
    };
  }

  const [google, zillow] = await Promise.all([fetchGoogleReviews(), fetchZillowReviews()]);
  const data = {
    google,
    zillow,
    hasGoogle: google.reviews.length > 0,
    hasZillow: zillow.reviews.length > 0
  };
  setCached("reviews", data);
  return {
    statusCode: 200,
    headers: withCacheHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(data)
  };
};
