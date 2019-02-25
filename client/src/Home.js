import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


import QuizzThumbnail from "./QuizzThumbnail.js";


class Home extends Component {
    constructor (props)
    {
      super(props);
      this.state = {
         quizzes : quizzes
      };
    }
    render() {
      let quizz = this.state.quizzes.map(q => <QuizzThumbnail {...q} />);
	return (
    <>
    <p>HOME</p>
    {quizz}
    </>
	);
    }
}

export default Home;
