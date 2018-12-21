import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Center extends Component {


  render() {
    return (
      <div>
        我要收货
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Center)
