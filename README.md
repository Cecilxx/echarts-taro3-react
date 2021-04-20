# echarts-taro3-react


基于Taro3.x-React框架构建的微信小程序版本echarts组件，及使用示例

--------

## 代码体积过大解决方案：
* 使用分包，[参考微信官文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)
* 自定义`echart.js`，自行前往[echart官网](https://echarts.apache.org/zh/builder.html)<strong>（注意：版本需要选择4.9.0，不要勾选压缩，可下载下来后自行压缩）</strong> 按需构建`echart.js`，然后替换掉`echarts-taro3-react/lib/ec-canvas/echart.js`

## 版本日志：
1.0.11：
* 新增datazoom功能

1.0.10：
* 压缩了echarts.js, 代码大小从2.2m下降至543kb
* 修复了更新数据不能刷新的问题

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

```js
// 一个页面多个图表（canvasId必传）
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
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

```

## 开发
```bash
npm run dev:weapp
```
