import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class Score extends Component {
   render() {
       let msg = "";
       let name = "Bryan";
       console.log(this.props.score/3)
      if(this.props.score < this.props.score/3) {
          msg = "Try it again, you will be better for sure ! We believe in you, "+name+" !";
      } else if (this.props.score > this.props.score/3 && this.props.score < this.props.score/1.5) {
        msg = name+" ! It's well done ! You will became an expert !";
      } else {
          msg = "Congratulations "+name+" ! You really know the subject !";
      }

       
     return (
       <>
       <div id="bravo">{msg}</div>
        <div id="score-quizz">{this.props.quizz}</div>
        <div id="score"><span id="underline">{this.props.score}</span></div>
        </>
     );
  }
}

export default Score;