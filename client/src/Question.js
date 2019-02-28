import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';


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
      return <div className="solution">  <label htmlFor={index}>{a}</label> <input type="checkbox" id={index} name={a} value="false" onClick={this.add.bind()}/></div>;
       });
     }
     else
     {

       answers = this.props.imgAnswers.map(a => {
        index = index + 1;
        return <div className="solution"> <label htmlFor={index}> <img src={HTTP_SERVER_PORT_PICTURES + a} /> </label> <input type="checkbox" id={index} name="subscribe" value="false"/>  </div>

       });
     }



     if(this.props.video != null)
     {
       video = <video controls>

                <source src={HTTP_SERVER_PORT_PICTURES + this.props.video}
                        type="video/mp4"/>

                Sorry, your browser doesn't support embedded videos.
            </video>;
     }

     return (
//this.props.score
       <form onSubmit={(e) => this.props.response(e)}>
         <div id="question">{this.props.question}</div>
         {video}
         <div id="boxsolution">{answers}</div>
         <input type="submit" value="Submit"/>
        </form>
     );
  }
}

export default Question;
