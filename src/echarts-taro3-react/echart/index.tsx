import React, { Component } from "react";
// import { View, Input } from "@tarojs/components";
import * as echarts from "../ec-canvas/echarts";
import EcCanvasTaro, { ECObj } from "../ec-canvas";

interface BaseChartState {
  ec: ECObj;
}

interface BaseChartProps {
  canvasId: string;
  onClick?: (params: unknown) => void;
  onDblclick?: (params: unknown) => void;
  onMousewheel?: (params: unknown) => void;
  onMouseout?: (params: unknown) => void;
  onMouseup?: (params: unknown) => void;
  onMousemove?: (params: unknown) => void;
  onMousedown?: (params: unknown) => void;
}

class BaseChart extends Component<BaseChartProps, BaseChartState> {
  state = {
    ec: {
      lazyLoad: true,
    },
  };

  Chart: any;

  refresh = (data: any) => {
    this.Chart.init((canvas, width, height, canvasDpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: canvasDpr,
      });
      canvas.setChart(chart);
      chart.setOption(data);

      chart.on("click", (params: unknown) => {
        if (typeof this.props.onClick === "function") {
          this.props.onClick(params);
        }
      });

      chart.on("dblclick", (params: unknown) => {
        if (typeof this.props.onDblclick === "function") {
          this.props.onDblclick(params);
        }
      });

      chart.on("mousewheel", (params: unknown) => {
        if (typeof this.props.onMousewheel === "function") {
          this.props.onMousewheel(params);
        }
      });

      chart.on("mouseout", (params: unknown) => {
        if (typeof this.props.onMouseout === "function") {
          this.props.onMouseout(params);
        }
      });

      chart.on("mouseup", (params: unknown) => {
        if (typeof this.props.onMouseup === "function") {
          this.props.onMouseup(params);
        }
      });

      chart.on("mousedown", (params: unknown) => {
        if (typeof this.props.onMousedown === "function") {
          this.props.onMousedown(params);
        }
      });

      chart.on("mousemove", (params: unknown) => {
        if (typeof this.props.onMousemove === "function") {
          this.props.onMousemove(params);
        }
      });

      return chart;
    });
  };

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
