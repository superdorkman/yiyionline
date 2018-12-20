import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Login from './components/login/Login';
// import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={Login} />
      {/* <Route path="/home" component={HomePage} /> */}
    </Switch>
  </App>
);
