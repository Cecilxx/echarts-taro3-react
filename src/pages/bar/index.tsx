// import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { BarChart } from "../../echarts-taro3-react";
import "./index.less";

export default class Bar extends Component {
  componentDidMount() {
    // refresh接受option参数，具体可参考echarts官网
    this.barChart.refresh();
  }

  barChart: any;

  refBarChart = (node) => (this.barChart = node);

  render() {
    return (
      <View className='bar-chart'>
        <BarChart ref={this.refBarChart} />
      </View>
    );
  }
}
