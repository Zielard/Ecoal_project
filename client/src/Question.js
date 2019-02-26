import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class Question extends Component {


   render() {
 let position = 0;
     let video = "";
     let answers ="";
     console.log(this.props.txtAnswers);

     if(this.props.txtAnswers.length != 0)
     {
       answers = this.props.txtAnswers.map(a => <div> <input type="checkbox" id={0} name={a} value="newsletter"/> <p>{a}</p> </div>);
     }
     else
     {
       answers = this.props.imgAnswers.map(a => <div> <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>  <img src={HTTP_SERVER_PORT_PICTURES + a} /> </div>);
     }



     if(this.props.video != null)
     {
       video = this.props.video;
     }

     return (

       <form onSubmit={(e) => this.props.response(e)}>
         <h3>{this.props.question}</h3>
         <div className="video">{video}</div>
         <div>{answers}</div>
         <input type="submit" value="Submit"/>
        </form>

     );
  }
}

export default Question;
