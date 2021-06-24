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
          chats: data.data.chats,

        });
      });
  }
  render() {
    return (
      <div className="container" >
        <h1>Call Transcript</h1>
        <div className="jumbotron" >
          {
            this.state.chats.map(chat => <div >
              <div className="row">
                <div className="col-sm-2" style={{ paddingLeft: "50px" }}>
                  <b id="user1">User</b>
                </div>
                <div className="col-sm-10" style={{ textAlign: "left" }}>
                  <div>{chat.user}</div>
                </div>
              </div><br></br>
              <div className="row">
                <div className="col-sm-2" style={{ paddingLeft: "50px" }}>
                  <b id="bot1">Casie</b>
                </div>
                <div className="col-sm-10" style={{ textAlign: "left" }}>
                  <div >{chat.bot.replace(/(<([^>]+)>)/ig, '')}</div>
                </div>
              </div><br></br>
            </div>
            )}
        </div>
      </div>
    );
  }
}
export default ListAll;
