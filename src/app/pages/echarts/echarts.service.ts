/**
 * Created by Asimple on 2018/3/27.
 */

export class EchartsService {
  private mediaFriendliness: any;
  private mediaFriendlyChart: any;
  private radarData: RadarData[];
  constructor() {
    this.radarData = new Array<RadarData>();
    this.radarData.push( new RadarData('微信', 100));
    this.radarData.push( new RadarData('客户端', 100));
    this.radarData.push( new RadarData('微博', 100));
    this.radarData.push( new RadarData('论坛', 100));
    this.radarData.push( new RadarData('其他来源', 100));
  }
  getMediaFriendliness(friend: number): any {
    this.mediaFriendliness = {
      series: [{
        type: 'liquidFill',
        data: [friend],
        color: ['#ef8c24'],
        outline: {
          show: false
        },
        label: {
          normal: {
            position: ['48%', '70%'],
            formatter: Math.round(friend * 10000 ) / 100 + '%\n总体友好度',
            textStyle: {
              color: 'red',
              insideColor: '#FFF',
              fontSize: 40
            }
          }
        },
        backgroundStyle: {
          borderColor: '#ef8c24',
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.4)',
        },
        radius: '70%'
      }]
    };
    return this.mediaFriendliness;
  }
  getMediaFriendlyChart(datas: number[], keyword: string): any {
    this.mediaFriendlyChart = {
      legend: {
        top: 10,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          color: '#000'
        }
      },
      radar: {
        radius: '70%',
        splitNumber: 5,
        axisLine: {
          lineStyle: {
            color: '#000',
            opacity: .2
          }
        },
        splitLine: {
          lineStyle: {
            color: '#000',
            opacity: .2
          }
        },
        indicator: this.radarData
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          let showHtm = params.name + '<br/>';
          const date = ['微信', '客户端', '微博', '论坛', '其他来源'];
          for ( let i = 0; i < params.value.length; i++ ) {
            showHtm = showHtm  + date[i] + ': ' + params.value[i] + '%<br/>';
          }
          return showHtm;
        }
      },
      series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
          normal: {
            shadowColor: 'rgba(0,0,0,.2)',
          }
        },
        data: [{
          value: datas,
          name: keyword,
        }]
      }],
      color: ['#ef8c24'],
    };
    return this.mediaFriendlyChart;
  }
}

export class RadarData {
  constructor(
    public name: string,
    public max: number
  ) {
  }
}
