import { createRateLimiter } from "@/src/app/middleware/rateLimit";

export const loginLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 5,
});

export const registerLimiter = createRateLimiter({
  windowMs: 60 * 1000, 
  maxRequests: 5,      
});

export const publicLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 100,
});

export const adminLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 20,
});

export const forgotPasswordLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 5,
});

export const resetPasswordLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 5,
});