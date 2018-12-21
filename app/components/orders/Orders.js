import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Center extends Component {


  render() {
    return (
      <div>
        我的订单
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Center)
