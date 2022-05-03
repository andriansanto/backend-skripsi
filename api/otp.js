const express = require('express');
const router = express.Router();

var crypto = require('crypto');

/**
 * GET OTP CODe
 * 
 * @return otp code | empty
 */
router.get('/', async (req, res) => {
    try {
        var Number = getRandomNumber();
        console.log(Number);
        res.json([{
            status: 200,
            RandomNumber: Number,
        }]);
    } catch (error) {
        console.error(error);
        return res.status(500).send("server error");
    }
   });


function getRandomNumber(){
    const n = crypto.randomInt(99999, 1000000);
    var verificationCode = n.toString().padStart(6, "0");
    return verificationCode;
}

module.exports = router;