import React, {Component} from "react";
import axios from "axios";
import {Route} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT} from './constants.js';

const LOGIN = 1;
const SIGNUP = 2;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            authenticated: false,
            renderForm: false
        };
        if (this.getSessionUser()) {
            this.login(this.getSessionUser())
        }
    }

    login = (user) => {
        if (user) {
            axios.post(HTTP_SERVER_PORT + 'login', user)
                .then(res => {
                console.log("data",res.data)
                    if (res.data.isConnected) {
                        console.log("login",user)
                        this.setSessionUser(user);
                        this.setState({
                            user: user,
                            authenticated: true
                        });
                        //this.props.checkConnexion(true);
                    }
                })
        }
    };

    signUp = (user) => {
        axios.post(HTTP_SERVER_PORT + 'signUp', user)
            .then(res => {
                if (res.data.isConnected) this.login(user)
            });
    };

    logout = () => {
        sessionStorage.clear();
        this.setState({
            user: null,
            authenticated: null
        });
        //this.props.checkConnexion(false);
    };

    getSessionUser = () => {
        if (!sessionStorage.getItem('username')) {
            return null;
        }
        return ({
            username: sessionStorage.getItem('username'),
            password: sessionStorage.getItem('password')
        })
    };

    setSessionUser = (user) => {
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('password', user.password);
    };

    // --- static methods ---
    static getUser = () => {
        if (!sessionStorage.getItem('username')) {
            return null;
        }
        return ({
            username: sessionStorage.getItem('username'),
            password: sessionStorage.getItem('password')
        })
    };

    // --- form methods
    handleForm = (e) => {
        e.preventDefault();
        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        if (user && user.username && user.password) {
            if (this.action === LOGIN) this.login(user);
            else if (this.action === SIGNUP) this.signUp(user);
        }
        this.toggleForm();
    };

    toggleForm = () => {
        this.setState({renderForm: !this.state.renderForm});
    };

    mark = (x) => {
        this.action = +x;
    };

    renderForm = () => {
        if (!this.state.renderForm) return null;
        let log = 'logosvg/log.svg';
        let person = 'logosvg/person.svg';
        return (
            <div class="mobile">
            <div id="content">
                <div id="me">
                    <div className="mepro"><img src={HTTP_SERVER_PORT_PICTURES + person} alt="avatar"/></div>
                    <div className="metext"><p>Login</p></div>
                </div>
                <div id="log">
                    <form action="#" method="get" onSubmit={e => this.handleForm(e)}>
                        <input type="text" name="username" id="username" placeholder="id"/>
                        <input type="password" name="password" id="mdp" placeholder="password"/>
                        <button type="submit"onClick={() => this.mark(LOGIN)}><img src={HTTP_SERVER_PORT_PICTURES + log} alt="->"/></button>
                    </form>
                        <button type="submit" name="signup" value="Sign up" onClick={() => this.mark(SIGNUP)}>Sign up</button>
                </div>
            </div>
        </div>
        );
    };

    
    render = () => {
        console.log(this.state.user,this.state.authenticated)
        if (this.state.user && this.state.authenticated) {
            return (
                <>
                    <p>{this.state.user.username}</p>
                    <button type="button" name="logout" className="btn btn-secondary" onClick={this.logout}>logout
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <button type="button" name="login" className="btn btn-secondary my-2 my-sm-0" onClick={this.toggleForm}>login
                    </button>
                    {this.renderForm()}
                </>
            )
        }

    }
}
  
export const ProtectedRoute = (props) => {
    if (Login.getUser())
        return (<Route exact={props.exact} path={props.path} component={props.component}/>);
    return null;
};

export default Login;
