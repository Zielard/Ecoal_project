import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class QuizzThumbnail extends Component {
   render() {
     return (
       <>

            <Link  to={'/quizz/'+ this.props._id}>
              <div class="mobile">
                <div id="content">
                  <div class="aquizz">
                    <img src={HTTP_SERVER_PORT_PICTURES + this.props.icon}/>
                    <p>{this.props.name}</p>
                  </div>
                </div>
              </div>
            </Link>
         
        </>
     );
  }
}

export default QuizzThumbnail;
