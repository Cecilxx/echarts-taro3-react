// import Taro from "@tarojs/taro";
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { FunnelChart } from '../../echarts-taro3-react'
import "./index.less";

export default class Funnel extends Component {
  funnelChart: any;
  componentDidMount() {
    const chartData =[
      {value: 60, name: '访问'},
      {value: 40, name: '咨询'},
      {value: 20, name: '订单'},
      {value: 80, name: '点击'},
      {value: 100, name: '展现'}]
    this.funnelChart.refresh(chartData);
  }

  refFunnelChart = (node) => this.funnelChart = node

  render() {
    return (
      <View className='funnel-chart'>
        <FunnelChart ref={this.refFunnelChart} />
      </View>
    );
  }
}
