import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas-taro/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas-taro";

interface BarChartState {
  ec: ECObj;
}

interface SerieItem {
  data: number[],
  type: string,
  showBackground: boolean,
  backgroundStyle: {
    color: string
  },
}

interface BarOption {
  xAxis: {
    type: string,
    data: string[],
  },
  yAxis: {
    type: string,
  },
  series: SerieItem[]
}

const defautOption: BarOption = {
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
}

function setChartData(chart, option?: BarOption) {
  const temp: BarOption = option || defautOption
  chart.setOption(temp);
}

export default class BarChart extends Component<{}, BarChartState> {
  state = {
    ec: {
      lazyLoad: true,
    },
  };
  Chart: any;

  refresh(data: BarOption) {
    this.Chart.init((canvas, width, height, canvasDpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: canvasDpr,
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
        canvasId='mychart-area'
        ec={this.state.ec}
      />
    );
  }
}
