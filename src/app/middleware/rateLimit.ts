
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

  return function rateLimiter(ip: string): boolean {
    const currentTime = Date.now();

    const existingData = store.get(ip);


    if (!existingData) {
      store.set(ip, {
        count: 1,
        startTime: currentTime,
      });
      return true;
    }

    const { count, startTime } = existingData;

   
    if (currentTime - startTime < options.windowMs) {
      if (count + 1 > options.maxRequests) {
        return false; 
      }

    
      store.set(ip, {
        count: count + 1,
        startTime,
      });

      return true;
    }

  
    store.set(ip, {
      count: 1,
      startTime: currentTime,
    });

    return true;
  };
}