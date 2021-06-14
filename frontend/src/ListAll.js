import React, { useState } from 'react';
import Chat from './Chat';
import './style.css';
class ListAll extends React.Component {
  state = {
    chats: [],
  }
  componentDidMount() {
    Chat.getAllChats()
      .then(data => {
        this.setState({
          chats: data.data.chats
        });
      });
  }
  render() {
    return (
      <div className="container">          
                <h1>Chat List</h1>
                {
                  this.state.chats.map(chat => <div id="ch_id">
                    <div className="ch_id1">
                      <label>Response Id  <input type="text" value={chat.response_id} /> </label>
                    </div><br></br>
                    <div className="ch_id1">
                      <label>User intent  <input type="text" value={chat.user_intent} /> </label>
                    </div><br></br>
                    <div className="ch_id1">
                      <label>User  <input type="text" value={chat.user} style={{ marginLeft: "80px" }} /> </label>
                    </div><br></br>
                    <div className="ch_id1">
                      <label>Bot  <input type="text" value={chat.Bot} style={{ marginLeft: "80px" }} /> </label>
                    </div><br></br>
                    <div className="ch_id1">
                      <label>Date  <input type="text" value={chat.Date} style={{ marginLeft: "80px" }} /> </label>
                    </div>
                  <br></br>
                     <a href="/" >Refresh</a>
                  </div>
                )}
              </div>
    );
  }
}
export default ListAll;
