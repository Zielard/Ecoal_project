import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';

import Question from "./Question.js";
import Score from "./Score.js";

import axios from 'axios';



class Quizz extends Component {
  constructor(props){
    super(props);
    this.state = {
        current : 0, 
        score : 0,
        quizz : null
    };
    this.response = this.response.bind(this);
    this.loadData();
  }
    
    
    async loadData() {
        console.log(1);
        const quizz = (await axios.get(HTTP_SERVER_PORT+"getquizz/"+ this.props.match.params.id)).data;
        console.log(2);
        
        console.log(quizz);
        this.setState({
            quizz : quizz
        })
        console.log(3);
    }

  response(e) {
    e.preventDefault();
    let q = this.state.quizz;
      
    let choices = [];
    for(let i = 0; i < e.target.elements.length; i++) {
        if(e.target.elements[i].checked){
            choices.push(i);
        }
    }
    
    let verify = true;
    for(let i = 0; i < choices.length; i++) {
        if(choices[i] != q.questions[this.state.current].solutions[i]){
            verify = false;
        }
    }
      if(verify == true) {
        this.setState({score : this.state.score + q.questions[this.state.current].points});
      }
      
    this.setState({current : q.questions + 1});
  }

   render() {
       let q = this.state.quizz;
       
       if(q == null) {
           
           return (
            <p> Loading ... </p>
           );
           
       } else {
        console.log(q);
           
         let show = "";
         if(this.state.current >= q.questions.length) {
           show = <Score score={this.state.score} />
         } else {
           show = <Question {... q.questions[this.state.current]} response={this.response}/> ;
         }
           
           return (
               <>
               <h3>{q.name}</h3>
               <img src={HTTP_SERVER_PORT_PICTURES + q.icon}/>
               {show}
                </>
             );
           
       }
  }
    
}

export default Quizz;
