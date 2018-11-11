import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Account from './components/Account/Account';
import Home from './components/Home/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/account" component={Account} />
      </BrowserRouter>
    );
  }
}

export default App;
