const { chat_records } = require('../models/chat_records');
function getAllChats() {
    return chat_records.find({})
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
// ( { item: { $not: /^p.*/ } } )