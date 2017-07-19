import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Film from './components/Film/Film'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/film/:id' component={Film} />
        </Switch>
      </div>
    );
  }
}

export default App;
