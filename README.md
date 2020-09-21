# echarts-taro3-react

基于Taro3.x-React框架构建的微信小程序版本echarts组件，及使用示例

## 传送门
+ [Taro3.x-Vue版本](https://github.com/Cecilxx/echarts-taro3-vue)

## 特性
+ Taro3.x
+ React
+ Typescript

## 功能
+ [x] 柱状图
+ [x] 折线图
+ [x] 饼图
+ [x] 散点图
+ [x] 雷达图
+ [x] 热力图
+ [x] 地图
+ [x] 仪表盘
+ [x] 漏斗图

## 快速安装
```bash
npm i echarts-taro3-react
```
## 使用

> 引入EChart组件后，拿到EChart组件实例，并调用实例<b style="color: red">refresh(option)</b>方法设置图标数据，<b style="color: red">option</b> 格式参照[echarts官网](https://echarts.apache.org/examples/zh/index.html)

举例：

```js
// 柱状图
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import "./index.less";

export default class Bar extends Component {
  componentDidMount() {
    const defautOption = {
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
    this.barChart.refresh(defautOption);
  }

  barChart: any;

  refBarChart = (node) => (this.barChart = node);

  render() {
    return (
      <View className='bar-chart'>
        <EChart ref={this.refBarChart} canvasId='bar-canvas' />
      </View>
    );
  }
}
```

```js
// 仪表盘
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
```

## 开发
```bash
npm run dev:weapp
```
