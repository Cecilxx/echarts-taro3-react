// import Taro from "@tarojs/taro";
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import ScatterChart from '../../components/scatter-chart'
import "./index.less";

export default class Scatter extends Component {
  scatterChart: any;

  componentDidMount() {
    const chartData = [
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58],
      [9.0, 8.81],
      [11.0, 8.33],
      [14.0, 9.96],
      [6.0, 7.24],
      [4.0, 4.26],
      [12.0, 10.84],
      [7.0, 4.82],
      [5.0, 5.68]
    ]
    this.scatterChart.refresh(chartData);
  }
  refScatterCharts = (node) => this.scatterChart = node

  render() {
    return (
      <View className="scatter-chart">
        <ScatterChart ref={this.refScatterCharts} />
      </View>
    );
  }
}
