// import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";

import "./index.less";

console.log("EChart", EChart);
export default class Bar extends Component {
  componentDidMount() {
    const defautOption = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      ],
    };

    setTimeout(() => {
      this.barChart.refresh(defautOption);
    }, 1000);

    const defautOption2 = {
      xAxis: {
        type: "category",
        data: ["Mon2", "Tue2", "Wed2", "Thu2", "Fri2", "Sat2", "Sun2"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [100, 250, 150, 90, 70, 310, 210],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      ],
    };
    setTimeout(() => {
      this.barChart.refresh(defautOption2);
    }, 3000);
  }

  barChart: any;

  refBarChart = (node) => (this.barChart = node);

  render() {
    return (
      <View className="bar-chart">
        <EChart ref={this.refBarChart} canvasId="bar-canvas" />
      </View>
    );
  }
}
