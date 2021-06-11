import axios from 'axios';
const baseUrl = "http://localhost:4000";
class Chat {   
    static getAllChats() {    
        return axios.post(baseUrl + "/chats/getAllChats", { withCredentials: true })
    }

}

export default Chat;