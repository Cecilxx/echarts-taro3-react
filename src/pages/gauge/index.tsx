// import Taro from "@tarojs/taro";
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { GaugeChart } from '../../echarts-taro3-react'
import "./index.less";

export default class Gauge extends Component {
  gaugeChart: any;
  componentDidMount() {
    const chartData = [{
      value: 70,
      name: '完成率',
  }];
    this.gaugeChart.refresh(chartData);
  }

  refGaugeChart = (node) => this.gaugeChart = node

  render() {
    return (
      <View className='gauge-chart'>
        <GaugeChart ref={this.refGaugeChart} />
      </View>
    );
  }
}
