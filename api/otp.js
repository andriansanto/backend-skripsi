const express = require('express');
const router = express.Router();

var crypto = require('crypto');



router.get('/getOTP', async (req, res) => {
    var Number = getRandomNumber();
    console.log(Number);
    res.send({"RandomNumber":Number});
   });


function getRandomNumber(){
    const n = crypto.randomInt(99999, 1000000);
    var verificationCode = n.toString().padStart(6, "0");
    return verificationCode;
}

module.exports = router;