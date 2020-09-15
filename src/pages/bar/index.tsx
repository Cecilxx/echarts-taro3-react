// import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { BarChart } from "../../../lib";
import "./index.less";

export default class Bar extends Component {
  barChart: any;

  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      measures: [
        {
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    };
    this.barChart.refresh(chartData);
  }
  refBarChart = (node) => (this.barChart = node);

  render() {
    return (
      <View className='bar-chart'>
        <BarChart ref={this.refBarChart} />
      </View>
    );
  }
}
