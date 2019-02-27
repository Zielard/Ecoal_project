import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


import QuizzThumbnail from "./QuizzThumbnail.js";


class Home extends Component {
    constructor (props)
    {
      super(props);
      this.state = {
         quizzes : quizzes
      };
    }
    render() {
      let quizz = this.state.quizzes.map(q => <QuizzThumbnail {...q} />);
        let logo = "logosvg/logo.svg" ;
        let person ="logosvg/person.svg" ;
        let menu ="logosvg/menu.svg" ;  
	return (
    <>
    <body>
    <div>
        <header>
            <div id="menu" onclick="menu()"><img src={HTTP_SERVER_PORT_PICTURES + menu} alt="menu"/></div>
            <div id="logo"><img src={HTTP_SERVER_PORT_PICTURES + logo} alt="logo"/></div>
            <div id="person"><img src={HTTP_SERVER_PORT_PICTURES + person} alt="person"/></div>
        </header>
        
        <p id="myTitle">HOME</p>
    </div>
    
    <div class="title">
        {quizz}
    </div>
    </body>
    </>

	);
    }
}

export default Home;
