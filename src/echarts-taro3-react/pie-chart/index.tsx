import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas-taro/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas-taro";

function setChartData(chart, data) {
  let option = {
    series: [
      {
        name: "访问来源",
        type: "pie",
        center: ["50%", "50%"],
        radius: [0, "60%"],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  chart.setOption(option);
}

interface PieChartState {
  ec: ECObj;
}

export default class PieChart extends Component<{}, PieChartState> {
  Chart: any;
  ChartTaro: any;
  inputRef: any;

  constructor(props) {
    super(props);
    this.state = {
      ec: {
        lazyLoad: true,
      },
    };
  }

  refresh(data) {
    this.ChartTaro.init((canvas, width, height, canvasDpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: canvasDpr
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChartTaro = (node) => (this.ChartTaro = node);

  render() {
    return (
      <EcCanvasTaro
        ref={this.refChartTaro}
        ec={this.state.ec}
        canvasId="pie-chart2"
      />
    );
  }
}
