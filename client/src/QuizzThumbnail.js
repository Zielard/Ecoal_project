import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class QuizzThumbnail extends Component {
   render() {
     return (
       <>
       <Link  to={'/quizz/:'+ this.props.id}>
         <p>{this.props.name}</p>

         <img src={HTTP_SERVER_PORT_PICTURES + this.props.icon}/>
         </Link>
        </>
     );
  }
}

export default QuizzThumbnail;
