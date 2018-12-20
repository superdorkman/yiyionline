import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/common/private/PrivateRoute';

import Sidebar from '../components/sidebar/Sidebar';

// import Detail from './detail/Detail';
// import FillInfo from './fill-info/FillInfo';
// import Goods from './Goods';
// import RoleList from './role-list/RoleList';
// import RoleAdd from './role-add/RoleAdd';
// import Pay from './pay/Pay';
// import QuickBuy from './quick-buy/QuickBuy';

class Buy extends Component {

  render() {
    const { match } = this.props;

    return (
      <Fragment>
        <Sidebar />
        <Switch>
          {/* <Route exact path={`${match.url}/`} component={Goods} />
          <Route exact path={`${match.url}/:sn`} component={Detail} />
          <PrivateRoute exact path={`${match.url}/:sn/create`} component={FillInfo} />
          <PrivateRoute exact path={`${match.url}/:sn/chu`} component={QuickBuy} />
          <PrivateRoute exact path={`${match.url}/:sn/roles`} component={RoleList} />
          <PrivateRoute exact path={`${match.url}/:sn/roles/:action`} component={RoleAdd} />
          <PrivateRoute exact path={`${match.url}/:sn/pay`} component={Pay} /> */}
        </Switch>
      </Fragment>
    );

  }
}


export default Buy;