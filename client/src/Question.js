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
      return <div className="solution"> <input type="checkbox" id={index} name={a} value="false" onClick={this.add.bind()}/> <label htmlFor={index}>{a}</label> </div>;
       });
     }
     else
     {

       answers = this.props.imgAnswers.map(a => {
        index = index + 1;
        return <div className="solution"> <input type="checkbox" id={index} name="subscribe" value="false"/> <label htmlFor={index}> <img src={HTTP_SERVER_PORT_PICTURES + a} /> </label>   </div>

       });
     }



     if(this.props.video != null)
     {
       video = <video controls autoplay muted lopp>

                <source src={HTTP_SERVER_PORT_PICTURES + this.props.video}
                        type="video/mp4"/>

                Sorry, your browser doesn't support embedded videos.
            </video>;
     }
     let log = "logosvg/log.svg";

     return (
//this.props.score
       <form onSubmit={(e) => this.props.response(e)}>
         <div id="question">{this.props.question}</div>
         {video}
         <div id="boxsolution">{answers}</div>
         <div id="log"><button type="submit"><img src={HTTP_SERVER_PORT_PICTURES + log} alt="->"/></button></div>
        </form>
     );
  }
}

export default Question;
