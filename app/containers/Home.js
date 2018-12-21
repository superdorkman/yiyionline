import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/common/private/PrivateRoute';

import Sidebar from '../components/sidebar/Sidebar';
import Center from '../components/center/Center';
import Chuhuo from '../components/chuhuo/Chuhuo';
import Finance from '../components/finance/Finance';
import Shouhuo from '../components/shouhuo/Shouhuo';
import Orders from '../components/orders/Orders';
import Warehouse from '../components/warehouse/Warehouse';


class Home extends Component {

  render() {
    const { match } = this.props;
    console.log(`${match.url}/`)
    return (
      <Fragment>
        <Sidebar />
        <Switch>
          <Route exact path={`${match.url}/`} component={Center} />
          <Route exact path='/finance' component={Finance} />
          <Route exact path='/chuhuo' component={Chuhuo} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/shouhuo' component={Shouhuo} />
          <Route exact path='/warehouse' component={Warehouse} />
        </Switch>
      </Fragment>
    );

  }
}


export default Home;