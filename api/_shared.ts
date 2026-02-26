type Review = {
  source: string;
  authorName: string;
  rating?: number;
  text?: string;
  date?: string;
  url?: string;
};

type CacheEntry<T> = { value: T; expiresAt: number };

const cache = new Map<string, CacheEntry<any>>();
const rateLimits = new Map<string, { count: number; resetAt: number }>();

const SIX_HOURS_MS = 6 * 60 * 60 * 1000;

export function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  return entry.value as T;
}

export function setCached<T>(key: string, value: T, ttlMs = SIX_HOURS_MS) {
  cache.set(key, { value, expiresAt: Date.now() + ttlMs });
}

export function rateLimit(ip: string, limit = 30, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const entry = rateLimits.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }
  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }
  entry.count += 1;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}

export function withCacheHeaders(headers: Record<string, string>) {
  return {
    ...headers,
    "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=3600"
  };
}

export type { Review };
