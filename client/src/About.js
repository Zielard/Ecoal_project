import React, {Component} from "react";
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';

class About extends Component {
   render() {
    let imgteamreact ="img/imgteamreact.jpg" ; 
     return (
       <>
       <div>
        <div id="imgteamreact"> <img src={HTTP_SERVER_PORT_PICTURES + imgteamreact} alt="imgteamreact" /></div>
        <div id="about">
            <h2>About</h2>
            <div id="textabout"> 
            <div id="marge">       
              <p>Artswers is a web based application which is developed to help poeple learn about the arts.
         Our target audience are those between 7 and 21 as we belive that this age group would be most intrested in learnig about such topics.
         Artswers covers all areas of art, from architecture and painting, to more popular topics such as cinema and music and everything in between.</p>

         <br />
         
         <h3>How Does It Work</h3>

         <p>In the begining, users select their age range and are presented with relevant quizzes.
         By doing this we ensure users have the best possible user experience.</p>

         <br />

         <h3>The Team</h3>

         <p>Our team is comprised of Three French, One Polish and One Irish, Known as The Ghost Riders
          Lucas Lacroix, Samuel Anli Hely, Amélie Chabon, Piotr Zielinski and Seán Caldwell
          Piotr was our team leader and One of our two backend delevopers.
          Sean managed content which would be dispayed within the quizzes, aswell as other jobs.
          Samuel and Lucas were both our Front End designers and our graphic designers for this application.
          Last but not least, Ameile, our other hard working backend developer</p>

          <p>Our Motto, 'One For All And All For One' calls back to The Three Musketeers(Or in this case, five).
          We belive that this app will have a quiz for everyone and everyone can have a quiz of thier own</p>  
              </div>
            </div>
          <h3>Our team</h3>
          <div id="team">
            <ul id="textteam"> 
              <li>Seán Caldwell</li>
              <li>Amélie Chambon</li>
              <li>Piotr Zieliński</li>
              <li>Lucas Lacroix</li>
              <li>Samuel Anli Hely</li>
            </ul>
            </div>
          </div>
        </div>
        </>
     );
  }
}

export default About;
