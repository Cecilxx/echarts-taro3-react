import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas-taro/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas-taro";

interface HeatmapChartState {
  ec: ECObj;
}

function setChartData(chart, data) {
  let xAxis = data.xAxis
  let yAxis = data.yAxis
  let dataValue = data.data
  let option = {
    tooltip: {
    },
    animation: false,
    grid: {
      height: '50%',
      y: '20%'
    },
    xAxis: {
      type: 'category',
      data: xAxis,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: yAxis,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
      show:false
    },
    series: [{
      type: 'heatmap',
      data: dataValue,
      label: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  chart.setOption(option);
}

export default class HeatmapChart extends Component<{}, HeatmapChartState> {
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
