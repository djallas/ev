import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import Account from './components/Account/Account';
import Order from './components/Order/Order';
import Terms from './components/Terms/Terms';
import Policy from './components/Policy/Policy';
import NoMatch from './components/NoMatch/NoMatch';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/terms-and-conditions" component={Terms} />
          <Route exact path="/privacy-policy" component={Policy} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
