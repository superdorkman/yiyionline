import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';

import Login from './components/login/Login';
import HomeStack from './containers/Home';
import PrivateRoute from './components/common/private/PrivateRoute';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={HomeStack} />
      <Route path="/login" component={Login} />
    </Switch>
  </App>
);
