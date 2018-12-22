import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Nav, Content } from './Finance.styled';
import Button from '../libs/button/Button';
import SectionHeader from '../common/section-header/SectionHeader';

const { ipcRenderer } = window.require('electron');

const images = 'https://ee979.oss-cn-hangzhou.aliyuncs.com/4585/e589a06df77eddf5d533d422b52aadf71160aaae;https://ee979.oss-cn-hangzhou.aliyuncs.com/4585/a1862ecdb52e87ac51e38842bde1bb838ac48b0e';

export class Finace extends Component {

  handleClick = () => {
    console.log('open dialog');
    ipcRenderer.send('gallary:open', images.split(';'));
  }

  render() {
    return (
      <Container>
        <Nav>
          <Button theme="yellow" onClick={this.handleClick}>提现管理</Button> 
          <Button theme="blue">资金明细</Button> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Finace)
