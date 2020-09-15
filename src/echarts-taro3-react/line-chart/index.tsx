import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas-taro/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas-taro";

function setChartData(chart, data) {
  let option = {
    color: ["#3398DB"],
    xAxis: [
      {
        type: "category",
        data: [],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [],
  };
  if (data && data.dimensions && data.measures) {
    option.xAxis[0].data = data.dimensions.data;
    option.series = data.measures.map((item) => {
      return {
        ...item,
        type: "line",
      };
    });
  }
  chart.setOption(option);
}

interface LineCharttate {
  ec: ECObj;
}

export default class LineChart extends Component<{}, LineCharttate> {
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
        canvasId='line-chart'
        ec={this.state.ec}
      />
    );
  }
}
