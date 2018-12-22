import React, { Component } from 'react';
import { Container, Ctrls } from './Header.styled';
import svgIcons from '../../assets/icons/icons.svg';
import Line from '../common/icons/Line';
import Expand from '../common/icons/Expand';
import Close from '../common/icons/Close';

const { ipcRenderer } = window.require('electron');

export class Header extends Component {
  
  handleCtrlClick(type) {
    ipcRenderer.send(`app:${type}`, {});
  }

  render() {
    const { sn } = this.props;

    return (
      <Container onMouseDown={this.handleMouseDown}>
        <span>{sn}</span>
        <Ctrls>
          <li onClick={() => this.handleCtrlClick('extract')}>
            <Line />
          </li>
          <li className="expand" onClick={() => this.handleCtrlClick('expand')}>
            <Expand />  
          </li>
          <li className="close" onClick={() => this.handleCtrlClick('hide')}>
            <Close />  
          </li>
        </Ctrls>
      </Container>
    )
  }
}

export default Header;