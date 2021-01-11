import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas";

interface BaseChartState {
  ec: ECObj;
}

interface BaseChartProps {
  canvasId: string;
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
      canvas.setChart(chart);
      chart.setOption(data);
      return chart;
    });
  }

  refChart = (node) => (this.Chart = node);

  render() {
    const { canvasId } = this.props;
    return (
      <EcCanvasTaro
        ref={this.refChart}
        canvasId={canvasId}
        ec={this.state.ec}
      />
    );
  }
}

export default BaseChart;
