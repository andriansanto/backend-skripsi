const express = require('express');
const otp = require('./api/otp');

const app = express();

const PORT = process.env.PORT || 5050;

app.use("/api/otp", otp);

app.listen(PORT, ()=> console.log(`server is running in port ${PORT}`));