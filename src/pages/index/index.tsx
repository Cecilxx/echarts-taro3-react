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
import TreeIcon from '../../img/icons/tree.png'
import ScatterIcon from '../../img/icons/scatter.png'
import SunburstIcon from '../../img/icons/sunburst.png'
import MapIcon from '../../img/icons/map.png'
import GraphIcon from '../../img/icons/graph.png'
import KIcon from '../../img/icons/k.png'
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
  bottom: ButtonItem[]
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
        { id: 'funnel', name: '漏斗图', img: FunnelIcon  },
        { id: 'gauge', name: '仪表盘', img: GaugeIcon },
        { id: 'heatmap', name: '热力图', img: HeatmapIcon },
        { id: 'radar', name: '雷达图', img: RadarIcon },
        { id: 'tree', name: '树图', img: TreeIcon },
        { id: 'sunburst', name: '旭日图', img: SunburstIcon },
        { id: 'map', name: '地图', img: MapIcon },
        { id: 'graph', name: '关系图', img: GraphIcon },
        { id: 'k', name: 'K 线图', img: KIcon }
      ],
      bottom: [
        { id: 'move', name: '可滑动的图表'},
        { id: 'more', name: '一个页面多个图表'},
        { id: 'add', name: '多图表结合在一起' }
      ]
    }
  }

  onShareAppMessage () {
    return {
      title: '各种图表在Taro中的使用',
      path:  'pages/index/index',
      imageUrl: 'http://img12.360buyimg.com/devfe/jfs/t1/20633/16/5554/7231/5c3f0272E1a342ec4/4ce472e34ad9a4cd.png'
    }
  }

  gotoEcharts(type) {
    Taro.navigateTo({ url: `/pages/${type}/index` });
  }

  render() {
    return (
      <View className="panel">
        {this.state.charts.map((chart) => {
          return (
            <View
              className="chart-with-img"
              onClick={this.gotoEcharts.bind(this, chart.id)}
              key={chart.id}
            >
              <Image src={chart.img} />
              <Text>{chart.name}</Text>
            </View>
          );
        })}

        {this.state.bottom.map((item, index) => {
          return (
            <View
              className='button'
              key={index}
              onClick={this.gotoEcharts.bind(this, item.id)}
            >
              {item.name}
            </View>
          );
        })}
      </View>
    );
  }
}

export default Index
