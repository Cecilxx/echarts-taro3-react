import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas-taro/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas-taro";

function setChartData(chart, data) {
  let option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: data,
        type: "scatter",
      },
    ],
  };
  chart.setOption(option);
}

interface ScatterChartState {
  ec: ECObj;
}

export default class ScatterChart extends Component<{}, ScatterChartState> {
  Chart: any;
  constructor(props) {
    super(props);
    this.state = {
      ec: {
        lazyLoad: true,
      },
    };
  }

  refresh(data) {
    this.Chart.init((canvas, width, height, canvasDpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: canvasDpr
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChart = (node) => (this.Chart = node);

  render() {
    return (
      <EcCanvasTaro
        ref={this.refChart}
        canvasId="mychart-area"
        ec={this.state.ec}
      />
    );
  }
}
