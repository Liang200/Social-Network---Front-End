import React, { Component } from 'react';
import { TopBar } from './TopBar'
import { Main } from './Main'
import { TOKEN_KEY } from "../constants";

class App extends Component {
  state = {
      isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
  }

  handleSuccessfullLogin = (token) => {
      localStorage.setItem('TOKEN_KEY' , token);
      this.setState(true);
  }

  render(){
    return (
      <div className="App">
        <TopBar/>
        <Main handleSuccessfullLogin = {this.handleSuccessfullLogin} isLoggedIn = {this.state.isLoggedIn} className="main"/>
      </div>
    );
  }
}

export default App;
