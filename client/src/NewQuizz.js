import React, {Component} from 'react';

import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';

import axios from 'axios';


class NewQuizz extends Component {  
    constructor (props)
    {
      super(props);
      this.state = {
         countquestion : 1
      };
        this.addQuestion = this.addQuestion.bind(this);
    }
    
    addQuestion(){
        
        let c = this.state.countquestion;
        
        if (c < 16){
            
            console.log (c)
            document.getElementById("page"+c).innerHTML="<div class='thequizz'>  <p>Question "+c+"</p><input type='text' name='question"+c+"' id='question"+c+"' placeholder='Question ...' required><div id='reply"+c+"'> <div class='add' onclick='text("+c+")'>Textual reply</div><div class='add' onclick='photo("+c+")'>Photo reply</div>  </div> </div>";            
            this.setState({
                countquestion : c-1+2
            })
            
        } else {
            document.getElementById("stop").innerHTML="<p> you can't add more question.<p>"
        }
        
    }
    
    render() {
        let log = "logosvg/log.svg";
        return (
                <form action="#" method="get">
                    <div className="thequizz">
                        <p>Quizz information</p>
                        <input type="text" name="name" id="name" placeholder="Quizz name" required/>
                        <input type="url" name="minature" id="minature" placeholder="Link to the miniature" required/>
                    </div>
                    <div id="page">
                        <div id="page1"></div>
                        <div id="page2"></div>
                        <div id="page3"></div>
                        <div id="page4"></div>
                        <div id="page5"></div>
                        <div id="page6"></div>
                        <div id="page7"></div>
                        <div id="page8"></div>
                        <div id="page9"></div>
                        <div id="page10"></div>
                        <div id="page11"></div>
                        <div id="page12"></div>
                        <div id="page13"></div>
                        <div id="page14"></div>
                        <div id="page15"></div>
                        <div id="page16"></div>
                    </div>
                    <div id="stop">
                         <div className="add" onClick={this.addQuestion}>+ Add another question</div>
                    </div>
                    <div id="log">       
                          <button type="submit"><img src={HTTP_SERVER_PORT_PICTURES + log} alt="->"/></button>
                    </div>                  
                </form>

            )
    }
}

export default NewQuizz;
