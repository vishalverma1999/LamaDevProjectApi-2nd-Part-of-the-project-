const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();


// Update Operation, put because we are updating and here i'm gonna write some parameter which is user id so we should indicate here the specific user id and then middleware to verify jwt
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    // first we will check whether this token belongs to admin or client or not, req.user is the one which gets data in verifyToken, so we will match the id contained by token and id of the client, also we can check for isAdmin. But everytime we write. But if i write this like that for any request i should write it again and again, to prevent this we will make a function verifyTokenAndAuthorization inside middleware
    // if(req.user.id === req.params.id || req.user.isAdmin){}

    // before updating i'm going to check my password that because user can change its password so in this case i should again encrypt my password
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString();
    }

    try {

        // i'm gonna write my user id first which is request and params and id or request user and id and after that i'm gonna write here whatever i'm gonna update
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body         // so how i'm gonna set new information to my user it's really easy i will say set and request and body basically take everything inside req.body and set it again if you do that it's not gonna return you this updated user to prevent this you should write {new:true}
        }, { new: true })

        res.status(200).json(updatedUser);  // updatedUser

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;


/*

*/