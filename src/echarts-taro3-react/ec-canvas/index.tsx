import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { Canvas } from "@tarojs/components";
import WxCanvas from "./wx-canvas";
import * as echarts from "./echarts";
import "./index.less";

function wrapTouch(event) {
  for (let i = 0; i < event.touches.length; ++i) {
    const touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
}

export interface EcCanvasState {}

export interface ECObj {
  onInit?(canvas, width, height, dpr): void;
  lazyLoad?: boolean;
}

export interface EcCanvasProps {
  canvasId: string;
  ec: ECObj;
}

interface EcCanvasTaro {
  canvasNode: any;
  chart: any;
}

class EcCanvasTaro extends Component<EcCanvasProps, EcCanvasState> {
  componentDidMount() {
    echarts.registerPreprocessor((option) => {
      if (option && option.series) {
        if (option.series.length > 0) {
          option.series.forEach((series) => {
            series.progressive = 0;
          });
        } else if (typeof option.series === "object") {
          option.series.progressive = 0;
        }
      }
    });

    if (!this.props.ec) {
      console.warn(
        '组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" ' +
          'canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>'
      );
      return;
    }
    if (!this.props.ec.lazyLoad) {
      this.init();
    }
  }

  init(callback?) {
    setTimeout(() => {
      this.initByNewWay(callback);
    }, 30);
  }

  initByNewWay(callback?) {
    const query = Taro.createSelectorQuery();
    const { ec, canvasId } = this.props;
    query
      .select(`.ec-canvas.${canvasId}`)
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        const canvasNode = res[0].node;
        this.canvasNode = canvasNode;
        const canvasDpr = Taro.getSystemInfoSync().pixelRatio;
        const canvasWidth = res[0].width;
        const canvasHeight = res[0].height;
        const ctx = canvasNode.getContext("2d");
        const canvas = new WxCanvas(ctx, canvasId, true, canvasNode);
        echarts.setCanvasCreator(() => {
          return canvas;
        });
        if (typeof callback === "function") {
          this.chart = callback(canvas, canvasWidth, canvasHeight, canvasDpr);
        } else if (typeof ec.onInit === "function") {
          this.chart = ec.onInit(canvas, canvasWidth, canvasHeight, canvasDpr);
        }
      });
  }
  canvasToTempFilePath(opt) {
    const query = Taro.createSelectorQuery().in(this);
    query
      .select(".ec-canvas")
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvasNode = res[0].node;
        opt.canvas = canvasNode;
        Taro.canvasToTempFilePath(opt);
      });
  }
  touchStart = (e) => {
    if (this.chart && e.touches.length > 0) {
      var touch = e.touches[0];
      var handler = this.chart.getZr().handler;
      handler.dispatch("mousedown", {
        zrX: touch.x,
        zrY: touch.y,
      });
      handler.dispatch("mousemove", {
        zrX: touch.x,
        zrY: touch.y,
      });
      handler.processGesture(wrapTouch(e), "start");
    }
  };
  touchMove = (e) => {
    if (this.chart && e.touches.length > 0) {
      var touch = e.touches[0];
      var handler = this.chart.getZr().handler;
      handler.dispatch("mousemove", {
        zrX: touch.x,
        zrY: touch.y,
      });
      handler.processGesture(wrapTouch(e), "change");
    }
  };
  touchEnd = (e) => {
    if (this.chart) {
      const touch = e.changedTouches ? e.changedTouches[0] : {};
      var handler = this.chart.getZr().handler;
      handler.dispatch("mouseup", {
        zrX: touch.x,
        zrY: touch.y,
      });
      handler.dispatch("click", {
        zrX: touch.x,
        zrY: touch.y,
      });
      handler.processGesture(wrapTouch(e), "end");
    }
  };
  render() {
    const { canvasId } = this.props;
    return (
      <Canvas
        type="2d"
        className={`ec-canvas ${canvasId}`}
        canvasId={canvasId}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
      />
    );
  }
}

export default EcCanvasTaro;
