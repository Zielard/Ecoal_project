import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import {quizzes, users} from './examples';
import Question from "./Question.js";
import Score from "./Score.js";



class Quizz extends Component {
  constructor(props){
    super(props);
    this.state = {current : 0, score : 0};
    this.response = this.response.bind(this);
  }

  response(e) {
    e.preventDefault();
    this.setState({current : this.state.current + 1});

    // Check answer
  }

   render() {
     let q = quizzes.filter(q => q._uid == this.props.match.params.id)[0];
     let show = "";
     if(this.state.current == q.questions.length) {
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

export default Quizz;
