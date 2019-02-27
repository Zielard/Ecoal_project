import React, {Component} from 'react';

import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';


import QuizzThumbnail from "./QuizzThumbnail.js";

import axios from 'axios';


class Home extends Component {
    constructor (props)
    {
      super(props);
      this.state = {
         quizzes : []
      };
    }
    
    async componentDidMount() {
        console.log(1);
        const quizzes = (await axios.get(HTTP_SERVER_PORT+"getquizzes")).data;
        console.log(2);
        
        console.log(quizzes);
        this.setState({
            quizzes : quizzes
        })
        console.log(3);
    }
    
    render() {
       if(this.state.quizzes==[]) {

           return (
            <p> Loading ... </p>
           );

       } else {
          let quizz = this.state.quizzes.map(q => <QuizzThumbnail {...q} />);
                                             console.log(quizz)
            let logo = "logosvg/logo.svg" ;
            let person ="logosvg/person.svg" ;
            let menu ="logosvg/menu.svg" ;  
           console.log(this.state.quizzes);
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

            )
        }
    }
}

export default Home;
