import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import Home from "./Home.js";
import About from "./About.js";


function AppHeader()
{

}


class App extends Component {

    render() {
	return (

    <BrowserRouter>
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route path="*" component={() => <p>Page Not Found</p>} />
      </Switch>
    </div>
  </BrowserRouter>
	);
    }
}

export default App;
