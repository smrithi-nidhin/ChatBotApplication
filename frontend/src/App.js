import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListAll from './ListAll';
import './style.css'
import 'react-notifications/lib/notifications.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{backgroundColor:"#eee"}}>      
          <Switch>          
            <Route path="/" exact={true} >
              <ListAll />
            </Route>          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
