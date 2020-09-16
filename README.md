# echarts-taro3-react
> [echarts-for-taro](https://github.com/WsmDyj/echarts-for-taro) taro3.x版本
基于taro3.x版本构建的微信小程序echarts组件，及使用示例

## 特性
+ taro3.0
+ react
+ typescript

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

## 使用
```bash
npm i echarts-taro3-react
```
```js
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { BarChart } from "echarts-taro3-react";
import "./index.less";

export default class Bar extends Component {
  barChart: any;

  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      measures: [
        {
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    };
    this.barChart.refresh(chartData);
  }

  refBarChart = (node) => (this.barChart = node);

  render() {
    return (
      <View className='bar-chart'>
        <BarChart ref={this.refBarChart} />
      </View>
    );
  }
}
```
