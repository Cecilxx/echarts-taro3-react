import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas";

interface BaseChartState {
  ec: ECObj;
}

interface BaseChartProps {
  canvasId: string
}

function setChartData(chart, option) {
  if (!option || typeof option !== 'object') {
    console.error('设置echarts数据失败，option必传')
  }
  chart.setOption(option);
}

class BaseChart extends Component<BaseChartProps, BaseChartState> {
  state = {
    ec: {
      lazyLoad: true,
    },
  };

  Chart: any;

  refresh(data) {
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
    const { canvasId } = this.props
    return (
      <EcCanvasTaro
        ref={this.refChart}
        canvasId={canvasId}
        ec={this.state.ec}
      />
    );
  }
}

export default BaseChart
