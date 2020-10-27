// import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "../../echarts-taro3-react";
import "./index.less";

export default class Bar extends Component {
  componentDidMount() {
    const barOption = {
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
    };
    const funnelOption = {
      title: {
        text: "漏斗图",
        subtext: "纯属虚构",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        data: ["展现", "点击", "访问", "咨询", "订单"],
      },

      series: [
        {
          name: "漏斗图",
          type: "funnel",
          left: "10%",
          top: 60,
          //x2: 80,
          bottom: 60,
          width: "80%",
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending",
          gap: 2,
          label: {
            show: true,
            position: "inside",
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: "solid",
            },
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
          },
          emphasis: {
            label: {
              fontSize: 20,
            },
          },
          data: [
            { value: 60, name: "访问" },
            { value: 40, name: "咨询" },
            { value: 20, name: "订单" },
            { value: 80, name: "点击" },
            { value: 100, name: "展现" },
          ],
        },
      ],
    };

    this.funnelChart.refresh(funnelOption);
    this.barChart.refresh(barOption);
  }

  barChart: any;
  funnelChart: any;

  refFunnelChart = (node) => (this.funnelChart = node);
  refBarChart = (node) => (this.barChart = node);

  render() {
    return (
      <View className='more-chart'>
        <View className='bar-chart-wrap'><EChart ref={this.refBarChart} canvasId='bar-canvas' /></View>
        <View className='funnel-chart-wrap'><EChart ref={this.refFunnelChart} canvasId='funnel-chart' /></View>
      </View>
    );
  }
}
