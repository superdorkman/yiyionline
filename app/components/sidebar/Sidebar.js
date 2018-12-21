import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Container } from './Sidebar.styled';
import Avatar from '../common/avatar/Avatar';

const menus = [
  {path: '/', label: '助手中心'},
  {path: '/warehouse', label: '仓库管理'},
  {path: '/jinhuo', label: '我要进货'},
  {path: '/chuhuo', label: '我要出货'},
  {path: '/order', label: '我的订单'},
  {path: '/finance', label: '财务管理'},
]

export class Sidebar extends Component {


  renderMenus() {
    return menus.map((menu, idx) => {
      const { path, label } = menu;
      return (
        <li key={idx}>
          <NavLink to={path}>{label}</NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <Container>
        <Avatar />

        <ul className="menus">
          {this.renderMenus()}
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
