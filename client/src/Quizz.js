import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import {quizzes, users} from './examples';
import Question from "./Question.js";


class Quizz extends Component {
  constructor(props){
    super(props);
  }
   render() {
     console.log(this.props);
     let q = quizzes.filter(q => q._uid == this.props.match.params.id)[0];
     console.log(q);
     let questions = this.state.q.questions.map(q => <Question {...q} />);
                                                
     return (
       <>
       <h3>{q.name}</h3>
       <img src={HTTP_SERVER_PORT_PICTURES + q.icon}/>
       {questions}
                                                
        </>
     );
  }
}

export default Quizz;
