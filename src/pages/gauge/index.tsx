// import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "../../echarts-taro3-react";
import "./index.less";

export default class Gauge extends Component {
  componentDidMount() {
    const option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%",
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "业务指标",
          type: "gauge",
          detail: { formatter: "{value}%" },
          data: [{ value: 50, name: "完成率" }],
        },
      ],
    };
    this.gaugeChart.refresh(option);
  }

  gaugeChart: any;

  refGaugeChart = (node) => (this.gaugeChart = node);

  render() {
    return (
      <View className='gauge-chart'>
        <EChart ref={this.refGaugeChart} canvasId='gauge-chart' />
      </View>
    );
  }
}
