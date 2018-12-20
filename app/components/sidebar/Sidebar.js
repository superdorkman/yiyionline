import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './Sidebar.styled';

export class Sidebar extends Component {

  render() {
    return (
      <Container>
        
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
