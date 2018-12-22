import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/common/private/PrivateRoute';
import styled from 'styled-components';

import ChatWrap from '../components/chat-wrap/ChatWrap';
import Sidebar from '../components/sidebar/Sidebar';
import ResizeArea from '../components/common/resize-area/ResizeArea';
import Header from '../components/header/Header';

import axios from 'axios';
import initMqtt from '../services/mqtt';

axios.interceptors.request.use((config) => {
  const session = JSON.parse(sessionStorage.getItem("session"));
  if (session && session.id) {
    if (config.url.indexOf('?') > -1) {
      config.url = `${config.url}&access_token=${session.id}`;
    } else {
      config.url = `${config.url}?access_token=${session.id}`;
    }
  }
  return config;
});

class Home extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    initMqtt();
  }

  _selectUser = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <Container>
        <Sidebar selectUser={this._selectUser} />
        <Main>
          <Header sn={user.from}  />
          <ChatWrap sn={user.from} />
        </Main>
        <ResizeArea />
      </Container>
    );

  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Home;