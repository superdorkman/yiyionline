import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

import Login from '../components/login/Login';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Route render={({ location }) => (
            <React.Fragment>
              <TransitionGroup style={wrapStyle}>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    <Route path="/" component={Login} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>

              {/* <Dialog />
              <Footer />
              <Toast /> */}
            </React.Fragment>
          )} />
        </Router>
      </Provider>
    );
  }
}
