import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Link} from 'react-router-dom';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";
import NewQuizz from "./NewQuizz.js";
import Login from "./Login.js";
import Subscribe from "./Subscribe.js";

class App extends Component {
    constructor (props)
    {
      super(props);
      this.state = {
          connected: false
      };
    }
    checkConnexion(connected) {
        if (connected !== this.state.connected) this.setState({connected: connected})
    }
    displayMenu() {
        console.log("cliqued");
        let setmenu = document.getElementById("setmenu").value;
        
        let x = '';
        let y = '';
        if(Login.getUser()) {
            x = "<a href='/newquizz'> Add a new quizz</a><a href='/Login'>Logout</a>";
        } else {
            x = "<a href='/Login'>Login / Subscribe</a>";
        }
        
        if (setmenu == "isclose"){
                document.getElementById("menu").innerHTML="<img src='"+HTTP_SERVER_PORT_PICTURES+"logosvg/close.svg' alt='close'/>";
                document.getElementById("drop").innerHTML="<div id='menuframe'><a href='/'> Home</a><a href='/about'> About</a>"+x+"</div>";
                document.getElementById("setmenu").value="isopen";
                return;
            }
        if (setmenu == "isopen") {
                document.getElementById("menu").innerHTML="<img src='"+HTTP_SERVER_PORT_PICTURES+"logosvg/menu.svg' alt='menu'/>";
                document.getElementById("drop").innerHTML=" "
                document.getElementById("setmenu").value="isclose";
        }
    }

    render() {
        let logo = "logosvg/logo.svg";
        let menu = "logosvg/menu.svg";
        let person = "logosvg/person.svg";
        
        let protectedRoute = null;
        if(Login.getUser()) {
            protectedRoute = <Route exact={true} path="/newquizz" component={NewQuizz}/>;
        }
	return (

        <BrowserRouter>
            <div>
                <header>
                    <div id="menu" onClick={e => this.displayMenu()}><img src={HTTP_SERVER_PORT_PICTURES + menu} alt="menu"/></div>
                    <div><img src={HTTP_SERVER_PORT_PICTURES + logo} alt="logo"/></div>
                    <div><Link  to={'/login'}><img src={HTTP_SERVER_PORT_PICTURES + person} alt="person"/></Link></div>
                </header>

              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/home" component={Home} />
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/subscribe" component={Subscribe} />
                <Route exact={true} path="/quizz/:id" component={Quizz}/>
                {protectedRoute}
                <Route path="*" component={() => <p>Page Not Found</p>} />
              </Switch>

            </div>
      </BrowserRouter>
	);
    }
}

export default App;
