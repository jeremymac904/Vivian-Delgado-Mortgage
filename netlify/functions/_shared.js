const cache = new Map();
const rateLimits = new Map();
const SIX_HOURS_MS = 6 * 60 * 60 * 1000;

function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  return entry.value;
}

function setCached(key, value, ttlMs = SIX_HOURS_MS) {
  cache.set(key, { value, expiresAt: Date.now() + ttlMs });
}

function rateLimit(ip, limit = 30, windowMs = 10 * 60 * 1000) {
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

function withCacheHeaders(headers) {
  return { ...headers, "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=3600" };
}

module.exports = { getCached, setCached, rateLimit, withCacheHeaders };
