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
        this.updateQuizz = this.updateQuizz.bind(this);
    }
    
    updateQuizz(e) {
        e.preventDefault();
        console.log(document.getElementById("quizzName").value);
        const name = document.getElementById("quizzName").value;
        const icon = document.getElementById("miniature").value;
        const keywords = [];
        
        let quizz = {
            name: name,
            icon: icon,
            keywords: keywords,
            questions: [{
                }
            ],
            published: true,
            owner: null,
            scores: []
        };
        
        let i = 1;
        console.log("question"+i,document.getElementById("question"+i).value)
        while(document.getElementById("question"+i) != null) {
            quizz.questions[i-1].question = document.getElementById("question"+i).value;
            //quizz.questions[i-1].video = document.getElementById("video"+i).value;
            quizz.questions[i-1].video = null;
            let solutions = [];
            if(document.getElementById("reply"+i+"one").value != undefined) {
                quizz.questions[i-1].txtAnswers = [document.getElementById("reply"+i+"one").value, 
                                document.getElementById("reply"+i+"two").value, 
                                document.getElementById("reply"+i+"three").value, 
                                document.getElementById("reply"+i+"four").value];
                
                if(document.getElementById("solution"+i+"one").checked){
                    solutions.push(0);
                }
                if(document.getElementById("solution"+i+"two").checked){
                    solutions.push(1);
                }
                if(document.getElementById("solution"+i+"three").checked){
                    solutions.push(2);
                }
                if(document.getElementById("solution"+i+"four").checked){
                    solutions.push(3);
                }
                
                quizz.questions[i-1].imgAnswers = [];
            } else {
                quizz.questions[i-1].imgAnswers = [document.getElementById("replyimage"+i+"one").value,
                    document.getElementById("replyimage"+i+"two").value,
                    document.getElementById("replyimage"+i+"three").value,
                    document.getElementById("replyimage"+i+"four").value];
                
                if(document.getElementById("solutionimg"+i+"one").checked){
                    solutions.push(0);
                }
                if(document.getElementById("solutionimg"+i+"two").checked){
                    solutions.push(1);
                }
                if(document.getElementById("solutionimg"+i+"three").checked){
                    solutions.push(2);
                }
                if(document.getElementById("solutionimg"+i+"four").checked){
                    solutions.push(3);
                }
                quizz.questions[i-1].txtAnswers = [];
            }
            quizz.questions[i-1].solutions = solutions;
            quizz.questions[i-1].points = document.getElementById("point"+i).value;
            i++;
            console.log(quizz)
        }
        
        const published = true;
        const owner = 1;
        const scores = [];
        axios.post(HTTP_SERVER_PORT + 'addnewquizz', {  // The json object to add in the collection
           name: name,
           questions:  []
        }).then(res => {
          if (res.status === 200)
             
            ; //this.loadData();                     // If everything is ok, reload data in order to upadate the component
          else
            console.log("Failed to add quizz");
        }).catch(err => console.log("Error =>", err));
        
    }
    
    addQuestion(){
        
        let c = this.state.countquestion;
        
        if (c < 16){
            
            console.log (c)
            document.getElementById("page"+c).innerHTML="<div class='thequizz'>  <p>Question "+c+"</p><input type='text' name='question"+c+"' id='question"+c+"' placeholder='Question ...' value='gg' required><div id='reply"+c+"'> <div class='add' onclick='text("+c+")'>Textual reply</div><div class='add' onclick='photo("+c+")'>Photo reply</div>  </div> <input type='number' name='point"+c+"' id='point"+c+"' placeholder='Points for a good answer' required/></div>";            
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
                <div className="form">
                    <div className="thequizz">
                        <p>Quizz information</p>
                        <input type="text" id="quizzName" placeholder="Quizz name" value="gg" required/>
                        <input type="url" name="miniature" id="miniature" placeholder="Link to the miniature" value="gg" required/>
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
                          <button type="submit" onClick={(e) => this.updateQuizz(e)}><img src={HTTP_SERVER_PORT_PICTURES + log} alt="->"/></button>
                    </div>                  
                </div>

            )
    }
}

export default NewQuizz;
