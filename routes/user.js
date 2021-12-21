const router = require("express").Router();  // using express router, and it's gonna be require Router() function 

// end point for example user test and here i'm gonna take request and response and after i can write here my function basically request what we are getting from user a user can provide any username email any input or it can be empty also doesn't matter and after that after these functions we are gonna send a response to user so let's write your response i will say response and i'm gonna send something to my user i will say user test is successful okay to use this router i should export it it's really easy i will say module and exports and it's gonna be router basically we are just exporting our router 
router.get("/usertest", (req,res)=>{
    res.send("usertest is successfull");
})

// you are gonna take some request from your user your client for example let's take username from our client site i'm gonna say const username it's gonna equal request and body and username this body is basically what we are passing to our server basically if you are passing any username email or any input you should write here buddy we are gonna pass everything inside our body
router.post("/userposttest", (req,res)=>{
    const username = req.body.username;   
    res.send("userposttest is successfull, Your Name is " + username);
})

module.exports = router;