const express = require('express');
// const secureRandom = require('secure-random');
var crypto = require('crypto');

var secureVal = 0;

const app = express();

app.get('/getOTP', async (req, res) => {
    var Number = getRandomNumber();
    console.log(Number);
    res.send({"RandomNumber":Number});
   });


function getRandomNumber(){
    const n = crypto.randomInt(99999, 1000000);
    var verificationCode = n.toString().padStart(6, "0");
    return verificationCode;
}

app.listen(3000);