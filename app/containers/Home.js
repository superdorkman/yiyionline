import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/common/private/PrivateRoute';

import Sidebar from '../components/sidebar/Sidebar';
import Center from '../components/center/Center';
import Finance from '../components/finance/Finance';


class Home extends Component {

  render() {
    const { match } = this.props;

    return (
      <Fragment>
        <Sidebar />
        <Switch>
          <Route exact path={`${match.url}/`} component={Center} />
          <Route exact path={`${match.url}/finance`} component={Finance} />
        </Switch>
      </Fragment>
    );

  }
}


export default Home;