// import Taro from "@tarojs/taro";
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { LineChart } from '../../echarts-taro3-react'
import "./index.less";

export default class Line extends Component {
  lineChart: any;

  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      measures: [{
        data: [10, 52, 200, 334, 390, 330, 220]
      }]
    }
    this.lineChart.refresh(chartData);
  }

  refLineChart = (node) => this.lineChart = node

  render() {
    return (
      <View className="line-chart">
        <LineChart ref={this.refLineChart} />
      </View>
    );
  }
}
