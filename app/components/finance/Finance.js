import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Finace extends Component {

  render() {
    return (
      <div>
        助手中心
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Finace)
