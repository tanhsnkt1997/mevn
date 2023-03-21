import rateLimit from "express-rate-limit";

export default rateLimit({windowMs: 15 * 60 * 1000, max: 50, standardHeaders: true, legacyHeaders: false})