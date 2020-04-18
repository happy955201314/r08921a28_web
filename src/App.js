import React from 'react';
import WebNavbar from './Navbar';
import {Route} from 'react-router-dom';
import messageBoard from './messageBoard';
import userInfo from './userInfo';
import myInfo from './myInfo';
import './App.css';


class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <WebNavbar/>
        <Route path='/home' exact component={myInfo} />
        <Route path='/messageBoard' component={messageBoard} />
        <Route path='/userInfo' component={userInfo} />
      </div>
    );
  }
}

export default App;
