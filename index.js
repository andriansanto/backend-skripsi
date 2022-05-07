const express = require('express');
const otp = require('./api/otp');
const rate_limit = require('express-rate-limit');
const req_ip = require('request-ip');

const app = express();
const limiter = rate_limit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit to 10 requests (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    keyGenerator: (req,res) =>{
        return req.clientIp;
    }
});
const PORT = process.env.PORT || 5050;
app.use(req_ip.mw());
app.use(limiter);
app.use("/api/otp", otp);

app.listen(PORT, ()=> console.log(`server is running in port ${PORT}`));