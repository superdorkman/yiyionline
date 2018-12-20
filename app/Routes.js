import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
<<<<<<< HEAD

import Login from './components/login/Login';
import Home from './containers/Home';
import PrivateRoute from './components/common/private/PrivateRoute';
=======
import Login from './components/login/Login';
// import CounterPage from './containers/CounterPage';
>>>>>>> b01d46e4a9957e5922117e5b3c0ec078593e7df1

export default () => (
  <App>
    <Switch>
<<<<<<< HEAD
      <PrivateRoute path="/" component={HomeStack} />
      <Route path="/login" component={Login} />
=======
      <Route path="/" component={Login} />
      {/* <Route path="/home" component={HomePage} /> */}
>>>>>>> b01d46e4a9957e5922117e5b3c0ec078593e7df1
    </Switch>
  </App>
);
