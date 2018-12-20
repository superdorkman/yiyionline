import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateTpProps = (state) => ({
  isLoggedIn: state.app.isLoggedIn
});

// const mapDispatchToProps = (dispatch) => ({
//   onToggleDrawer: () => dispatch(toggleDrawer())
// });

export default connect(mapStateTpProps)(PrivateRoute);
