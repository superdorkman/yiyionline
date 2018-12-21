import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Center extends Component {


  render() {
    return (
      <div>
        仓库管理
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Center)
