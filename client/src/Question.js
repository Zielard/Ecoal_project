import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class Question extends Component {

  add()
  {
      console.log(3);
  }
   render() {
 let index = 0;
     let video = "";
     let answers = [];

     if(this.props.txtAnswers.length > 0)
     {
       answers = this.props.txtAnswers.map(a => {
         index = index + 1;
      return <div className="solution"> <input type="checkbox" id={index} name={a} value="false" onClick={this.add.bind()}/> <label htmlFor={index}>{a}</label> </div>;
       });
     }
     else
     {

       answers = this.props.imgAnswers.map(a => {
        index = index + 1;
        return <div className="solution"> <input type="checkbox" id={index} name="subscribe" value="false"/>  <label htmlFor={index}> <img src={HTTP_SERVER_PORT_PICTURES + a} /> </label> </div>

       });
     }



     if(this.props.video != null)
     {
       video = this.props.video;
     }

     return (
//this.props.score
       <form onSubmit={(e) => this.props.response(e)}>
         <div id="question">{this.props.question}</div>
         <div className="video">{video}</div>
         <div id="boxsolution">{answers}</div>
         <input type="submit" value="Submit"/>
        </form>
     );
  }
}

export default Question;
