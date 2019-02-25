import React, {Component} from "react";
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class QuizzThumbnail extends Component {
   render() {
     return (
       <>
         <p>{this.props.name}</p>

         <img src={HTTP_SERVER_PORT_PICTURES + this.props.icon}/>
        </>
     );
  }
}

export default QuizzThumbnail;
