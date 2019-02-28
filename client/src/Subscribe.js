import React, {Component} from "react";
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class Subscribe extends Component {
   render() {
     let logo = "logosvg/logo.svg";
     let log = "logosvg/log.svg";
     let person = "logosvg/person.svg"
     return (
       <div class="mobile">
           <div id="content">
               <div id="me">
                   <div class="mepro"><img src={HTTP_SERVER_PORT_PICTURES + person} alt="avatar"/></div>
                   <div class="metext"><p>Subscribe</p></div>
               </div>
               <div id="log">
                   <form action="#" method="get">
                       <input type="text" id="id" placeholder="name"/>
                       <input type="email" id="email" placeholder="email"/>
                       <input type="password" id="mdp" placeholder="password"/>
                       <button type="submit"><img src={HTTP_SERVER_PORT_PICTURES + log} alt="->"/></button>
                   </form>
                   <a href="/login">login</a>
               </div>
           </div>
       </div>
     );
  }
}

export default Subscribe;
