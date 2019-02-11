import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
export class Main extends React.Component {

    getLogin = () => {
        return this.props.isLoggedIn ? <Home/> : <Login handleSuccessfullLogin = {this.props.handleSuccessfullLogin} />
    }
    render(){
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" component={this.getLogin}/>
                    <Route path="/login" render = {this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home}/>
                    <Route component={this.getLogin}/>
                </Switch>
            </div>
        );
    }
}