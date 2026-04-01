import { NextRequest, NextResponse } from "next/server";

type RateLimitData = {
  count: number;
  startTime: number;
};

type RateLimitOptions = {
  windowMs: number;
  maxRequests: number;
};

export function createRateLimiter(options: RateLimitOptions) {
  const store: Map<string, RateLimitData> = new Map();

  function rateLimiter(ip: string): boolean {
    const currentTime = Date.now();
    const existingData = store.get(ip);

    if (!existingData) {
      store.set(ip, { count: 1, startTime: currentTime });
      return true;
    }

    const { count, startTime } = existingData;

    if (currentTime - startTime < options.windowMs) {
      if (count + 1 > options.maxRequests) {
        return false;
      }
      store.set(ip, { count: count + 1, startTime });
      return true;
    }

    store.set(ip, { count: 1, startTime: currentTime });
    return true;
  }

  const limiter = ((ip: string): boolean => rateLimiter(ip)) as ((ip: string) => boolean) & {
    check: (req: NextRequest) => NextResponse | null;
  };

  limiter.check = (req: NextRequest): NextResponse | null => {
    const ip =
      req.headers.get("x-forwarded-for") ??
      req.headers.get("x-real-ip") ??
      "unknown";
    return rateLimiter(ip)
      ? null
      : NextResponse.json({ error: "Too many requests" }, { status: 429 });
  };

  return limiter;
}
