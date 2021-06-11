const { Chat } = require('../models/chats');
function getAllChats() {
    return Chat.find({})

        .then(chats => {
            return {
                statusCode: 200,
                message: "List Following",
                chats: chats
            }
        })
}
module.exports = {
    getAllChats: getAllChats,
}