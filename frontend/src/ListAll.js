import React, { useState } from 'react';
import Chat from './Chat';
import img from './image1.jpg';
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
            <div className="container-fluid" style={{padding: '100px', backgroundImage: 'linear-gradient(to left top, #051937, #051937, #002080, #051937, #051937)'}}>
            <div className="jumbotron" style={{backgroundColor: 'white', paddingTop: '0px', borderRadius: '20px'}}>
              <div className="row">
                <div className="col-8">
                  <div className="row" style={{paddingLeft: '50px'}}>
                    <div className="col-12">
                      {/* <h3 style={{paddingBottom: '70px', paddingTop: '30px'}}>podcorn</h3> */}
        
                    <h1>Chat List</h1>
                    <table>
                        <tr>
                            <th>Response Id</th>
                            <th>User intent</th>
                            <th>User</th>
                            <th>Bot</th>
                            <th>Date</th>
                        </tr>
                    {
                        this.state.chats.map(chat =><tr>
                           <td> {chat.response_id}</td>  
                           <td> {chat.user_intent}</td>  
                           <td> {chat.user}</td>  
                           <td> {chat.Bot}</td>  
                           <td> {chat.Date}</td>  
                          </tr>
                        )}
                        </table>
                
                <br></br>
           
                                    
                    </div>
                  </div>
                </div>
                <div className="col-4">   
                  <img src={img} style={{height: '114%',width: '100%',marginLeft:'63px'}} />
                  
                </div>
              </div>
            </div>   
          </div>
           
        );
    }
}
export default ListAll;
