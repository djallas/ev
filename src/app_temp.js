import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import NoMatch from './components/NoMatch/NoMatch';




class App extends Component {
  render() {
    console.log(this.props.data);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
