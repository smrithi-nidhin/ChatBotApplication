const mongoose = require('mongoose');
const chat_records = mongoose.model('chat_records', {
    response_id: String,
    user_intent: String,
    user: String,
    bot: String,
    date:String,
});
module.exports = {
    
    chat_records
}
