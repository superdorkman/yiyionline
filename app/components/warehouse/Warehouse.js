import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Table, Filter } from './Warehouse.styled';
import SectionHeader from '../common/section-header/SectionHeader';

import Select from '../libs/select/Select';

const types = ['全部类型', '出金', '收金'];
const crosses = ['全部跨区', '跨1', '跨2', '跨3a', '跨3b', '跨4', '跨5', '跨6', '跨7', '跨8'];

export class Center extends Component {


  renderRows() {
    return [1,2,3,4,5,6,7,8].map((cross, idx) => {

      return (
        <tr key={idx}>
          <td>跨{cross}</td>
          <td>7088.00万金</td>
          <td>7088.00万金</td>
          <td>7088.00万金</td>
        </tr>
      )
    })
  }


  render() {
    return (
      <Container>
        <SectionHeader title="库存统计" />
        <div className="today-total">
          <span>今日出货总计：888888.88万金</span>
          <span>今日收货总计：888888.88万金</span>
          <span>仓库剩余总库存：888888.88万金</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>跨区</th>
              <th>今日出货</th>
              <th>今日收货</th>
              <th>仓库剩余金币</th>
              <th>库存修改</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
            {/* <tr>
              <th>跨1区</th>
              <th>跨2区</th>
              <th>跨3区</th>
              <th>跨4区</th>
              <th>跨5区</th>
              <th>跨6区</th>
              <th>跨7区</th>
              <th>跨8区</th>
            </tr> */}
          </tbody>
        </table>

        <Filter>
          <Select options={crosses} selected="全部跨区" />
          <Select options={types} selected="全部类型" />
        </Filter>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Center)
