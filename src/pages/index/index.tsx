import Taro from "@tarojs/taro";
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import PieIcon from '../../img/icons/pie.png'
import BarIcon from '../../img/icons/bar.png'
import LineIcon from '../../img/icons/line.png'
import FunnelIcon from '../../img/icons/funnel.png'
import GaugeIcon from '../../img/icons/gauge.png'
import HeatmapIcon from '../../img/icons/heatmap.png'
import RadarIcon from '../../img/icons/radar.png'
import ScatterIcon from '../../img/icons/scatter.png'

import './index.less'

interface ChartItem {
  id: string;
  name: string;
  img: string
}

interface ButtonItem {
  id: string;
  name: string;
}

interface IndexState {
  charts: ChartItem[];
}

interface Index {}

class Index extends Component<{}, IndexState> {
  constructor(props) {
    super(props);
    this.state = {
      charts: [
        { id: 'bar', name: '柱状图', img: BarIcon },
        { id: 'line', name: '折线图', img: LineIcon },
        { id: 'pie', name: '饼图', img: PieIcon },
        { id: 'scatter', name: '散点图', img: ScatterIcon },
        { id: 'radar', name: '雷达图', img: RadarIcon },
        { id: 'heatmap', name: '热力图', img: HeatmapIcon },
        // { id: 'map', name: '地图', img: MapIcon  },
        { id: 'gauge', name: '仪表盘', img: GaugeIcon },
        { id: 'funnel', name: '漏斗图', img: FunnelIcon  },
      ]
    }
  }

  gotoEcharts(type) {
    Taro.navigateTo({ url: `/pages/${type}/index` });
  }

  render() {
    return (
      <View className='panel'>
        {this.state.charts.map((chart) => {
          return (
            <View
              className='chart-with-img'
              onClick={this.gotoEcharts.bind(this, chart.id)}
              key={chart.id}
            >
              <Image src={chart.img} />
              <Text>{chart.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Index
