const rateLimitMap = new Map();

export function rateLimiter(ip: string) {
  const now = Date.now();
  const windowTime = 60 * 1000; // 1 min
  const maxRequests = 10;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, time: now });
    return true;
  }

  const data = rateLimitMap.get(ip);

  if (now - data.time < windowTime) {
    data.count++;

    if (data.count > maxRequests) {
      return false; // blocked
    }
  } else {
    rateLimitMap.set(ip, { count: 1, time: now });
  }

  return true;
}