// import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "../../echarts-taro3-react";
import "./index.less";

export default class Line extends Component {
  lineChart: any;

  componentDidMount() {
    const option = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          data: [
            [20, 120],
            [50, 200],
            [40, 50],
          ],
          type: "line",
        },
      ],
    };

    this.lineChart.refresh(option);
  }

  refLineChart = (node) => (this.lineChart = node);

  render() {
    return (
      <View className='line-chart'>
        <EChart ref={this.refLineChart} canvasId='line-chart' />
      </View>
    );
  }
}
