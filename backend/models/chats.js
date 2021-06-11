const mongoose = require('mongoose');
const Chat = mongoose.model('Chat', {
    response_id: String,
    user_intent: String,
    user: String,
    Bot: String,
    Date:String

});
module.exports = {
    Chat
}