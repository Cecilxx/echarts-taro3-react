import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas-taro/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas-taro";

interface GaugeChartState {
  ec: ECObj;
}

function setChartData(chart, data) {
  let option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
        name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        data: data

    }]
  };
  chart.setOption(option);
}

export default class GaugeChart extends Component<{}, GaugeChartState> {
  Chart: any;

  constructor(props) {
    super(props);
  }

  state = {
    ec: {
      lazyLoad: true
    }
  };

  refresh(data) {
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChart = node => (this.Chart = node);

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