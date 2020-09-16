import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas-taro/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas-taro";

interface RadarChartState {
  ec: ECObj;
}

function setChartData(chart, data) {
  let option = { 
    radar: {
      name: {
        textStyle: {
          color: '#999',
        }
      },
      indicator: data
    },
    series: []
  };
  if (data && data.dimensions && data.measures) {
    option.radar.indicator = data.dimensions.data
    option.series = data.measures.map(item => {
      return {
        ...item,
        type: 'radar',
      }
    })
  }
  chart.setOption(option);
}

export default class RadarChar extends Component<{}, RadarChartState> {
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