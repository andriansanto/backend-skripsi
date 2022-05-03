const express = require('express');
const otp = require('./api/otp');
const rate_limit = require('express-rate-limit');

const app = express();
const limiter = rate_limit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: [{status: 500, RandomNumber: "Your OTP request has exceed the limit, please try again in 15 minute"}],
});
const PORT = process.env.PORT || 5050;
app.use(limiter);
app.use("/api/otp", otp);

app.listen(PORT, ()=> console.log(`server is running in port ${PORT}`));