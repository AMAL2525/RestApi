var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');


router.get("/", async (req, res, next) => {
    try {
        const user = await User.find()
        res.send(user)
    } catch (error) {
        console.log(error);
        res.statut(500).json({
            error
        })
    }
});
    router.get("/:_id", async (req, res, next) => {
        console.log(req.params)
        const _id= req.params._id
     try {
         const user = await User.findById(_id)
         res.send(user)
     } catch (error) {
         console.log(error);
         res.statut(404).json({error})
     }
});
router.post('/', (req, res, next) => {

    const user = new User({
 
        name: req.body.name,
        age: req.body.age,
        
    });
    user.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
    res.status(201).json({
        message: "Handling Post request to /user",
        createUser: user
    });


});
router.patch("/:_id", async (req,res,next) =>{

    const _id = req.params._id
    const updatedUser = req.body
    console.log(req.body)
    try {
        const user = await User.findOneAndUpdate({_id}, updatedUser)
        const modif =await User.findById({_id})
        res.send(user)
    } catch (error) {
        console.log(error);
        res.statut(404).json({error})
    }
});
module.exports = router;
