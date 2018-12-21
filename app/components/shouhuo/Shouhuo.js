import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Nav, Content } from './Shouhuo.styled';
import Button from '../libs/button/Button';
import SectionHeader from '../common/section-header/SectionHeader';

export class Shouhuo extends Component {

  render() {
    return (
      <Container>
        <Nav>
          <Button theme="yellow">收货配置</Button> 
          <Button theme="blue">收货商走势</Button> 
        </Nav>
        <Content>
          <SectionHeader title="提现管理" />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Shouhuo)
