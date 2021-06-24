var express = require('express');
// const { Chat } = require('../models/chats');
var router = express.Router();
var chat = require('../services/chat')
router.post('/getAllChats', function (req, res) {
  console.log("in routs")
  chat.getAllChats()
    .then(data => {
      res.status(data.statusCode).send({ message: data.message, chats: data.chats });

    })
})

module.exports = router;