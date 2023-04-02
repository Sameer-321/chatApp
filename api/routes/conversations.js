const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conv
router.post("/",(req,res)=>{
    const newConversation  =new Conversation({
        members:[req.body.senderId,req.body.receiverId]
    })
})

//get conv

module.exports = router;