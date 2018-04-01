import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NbThemeService} from '@nebular/theme';
import {HttpClient} from '@angular/common/http';
import {Detail} from '../../service/information.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnDestroy, AfterViewInit {
  showloading = true;
  detail: Detail[];
  details: Array<Array<Detail>>;
  option: any = { };
  date_number: any;
  date: Array<string>;
  number: Array<number>;
  numbers: Array<Array<number>>;
  info: Array<string>;
  hiddn: Array<boolean>;
  line_info: Array<any>;
  private keyword: string;
  private dataSource: Observable<any>;
  themeSubscription: any;
  constructor(
    private route: ActivatedRoute,
    private theme: NbThemeService,
    private http: HttpClient
    ) {
    this.keyword = this.route.snapshot.queryParams['search'];
    this.info = new Array<string>();
    this.date = new Array<string>();
    this.hiddn = new Array<boolean>();
    this.numbers = new Array<Array<number>>();
    this.details = new Array<Array<Detail>>();
    this.info.push(this.keyword);
    this.hiddn.push(true);
  }
  ngAfterViewInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe( config => {
      const charts: any = config.variables.echarts;
      const colors: any = config.variables;
      this.line_info = new Array<any>();
      let t: any;
      const colorList = [colors.infoLight, colors.warningLight, colors.dangerLight, colors.successLight, colors.primaryLight];
      for (const key in this.info ) {
        if ( this.info[key] != '' ) {
          t = {
            name: this.info[key],
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: this.numbers[key],
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 237, 250,0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(199, 237, 250,0.2)'
                }], false)
              }
            },
            itemStyle: {
              normal: {
                color: colorList[key]
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            },
          };
          this.line_info.push(t);
        }
      }
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: charts.tooltipBackgroundColor
            }
          },
          backgroundColor: charts.bg,
          padding: [5, 10],
          textStyle: {
            color: charts.textColor,
          },
          extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
        legend: {
          right: 20,
          orient: 'vertical',
          data: this.info
        },
        toolbox: {
          right: '50%',
          feature: {
            dataZoom: {},
            saveAsImage: {},
            restore: {},
            magicType: {
              type: ['line', 'bar']
            },
          }
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 60,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 60,
            end: 100
          }
        ],
        xAxis: {
          type: 'category',
          data: this.date,
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: charts.axisLineColor
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: [charts.axisLineColor]
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: charts.axisLineColor
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        series: this.line_info
      };
    });
  }
  ngOnInit() {
    this.dataSource = this.http.get('/api/information', { params: {'keywords': this.info }});
    this.dataSource.subscribe( (data) => {
      for (const key of data ) {
        this.number = new Array<number>();
        if ( key != '' ) {
          this.date_number = key['date'];
          this.detail = key['info'];
          for ( const i in this.date_number ) {
            if ( i != '' ) {
              this.date.push(i);
              this.number.push(this.date_number[i]);
            }
          }
          this.numbers.push(this.number);
          this.details.push(this.detail);
        }
      }
      this.date.sort();
      this.themeSubscription = this.theme.getJsTheme().subscribe( config => {
        const charts: any = config.variables.echarts;
        const colors: any = config.variables;
        this.line_info = new Array<any>();
        let t: any;
        const colorList = [colors.infoLight, colors.warningLight, colors.dangerLight, colors.successLight, colors.primaryLight];
        for (const key in this.info ) {
          if ( this.info[key] != '' ) {
            t = {
              name: this.info[key],
              type: 'line',
              smooth: true,
              showSymbol: false,
              symbol: 'circle',
              symbolSize: 6,
              data: this.numbers[key],
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(199, 237, 250,0.5)'
                  }, {
                    offset: 1,
                    color: 'rgba(199, 237, 250,0.2)'
                  }], false)
                }
              },
              itemStyle: {
                normal: {
                  color: colorList[key]
                }
              },
              lineStyle: {
                normal: {
                  width: 3
                }
              },
            };
            this.line_info.push(t);
          }
        }
        this.option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: charts.tooltipBackgroundColor
              }
            },
            backgroundColor: charts.bg,
            padding: [5, 10],
            textStyle: {
              color: charts.textColor,
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
          },
          legend: {
            right: 20,
            orient: 'vertical',
            data: this.info
          },
          toolbox: {
            right: '50%',
            feature: {
              dataZoom: {},
              saveAsImage: {},
              restore: {},
              magicType: {
                type: ['line', 'bar']
              },
            }
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 60,
              end: 100
            },
            {
              type: 'inside',
              realtime: true,
              start: 60,
              end: 100
            }
          ],
          xAxis: {
            type: 'category',
            data: this.date,
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: charts.axisLineColor
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                color: [charts.axisLineColor]
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: charts.axisLineColor
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            }
          },
          series: this.line_info
        };
      });
      this.showloading = false;
    });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  add() {
    this.info.push('');
    this.hiddn.push(true);
  }
  del(i: number) {
    this.info.splice(i, 1);
    this.hiddn.splice(i, 1);
  }
  submit() {
    this.showloading = true;
    this.numbers = new Array<Array<number>>();
    this.details = new Array<Array<Detail>>();
    this.dataSource = this.http.get('/api/information', { params: {'keywords': this.info }});
    this.dataSource.subscribe( (data) => {
      for (const key of data ) {
        this.number = new Array<number>();
        if ( key != '' ) {
          this.date_number = key['date'];
          this.detail = key['info'];
          for ( const i in this.date_number ) {
            if ( i != '' ) {
              this.number.push(this.date_number[i]);
            }
          }
          if ( this.numbers.length > 0 ) {
            let t = this.numbers[0].length - this.number.length;
            if ( t > 0 ) {
              while ( t >= 0 ) {
                this.number.unshift(0);
                t = t - 1;
              }
            } else if ( t < 0 ) {
              while ( t < 0 ) {
                this.number.shift();
                t = t + 1;
              }
            }
          }
          this.numbers.push(this.number);
          this.details.push(this.detail);
        }
      }
      this.themeSubscription = this.theme.getJsTheme().subscribe( config => {
        const charts: any = config.variables.echarts;
        const colors: any = config.variables;
        this.line_info = new Array<any>();
        let t: any;
        const colorList = [colors.infoLight, colors.warningLight, colors.dangerLight, colors.successLight, colors.primaryLight];
        for (const key in this.info ) {
          if ( this.info[key] != '' ) {
            t = {
              name: this.info[key],
              type: 'line',
              smooth: true,
              showSymbol: false,
              symbol: 'circle',
              symbolSize: 6,
              data: this.numbers[key],
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(199, 237, 250,0.5)'
                  }, {
                    offset: 1,
                    color: 'rgba(199, 237, 250,0.2)'
                  }], false)
                }
              },
              itemStyle: {
                normal: {
                  color: colorList[key]
                }
              },
              lineStyle: {
                normal: {
                  width: 3
                }
              },
            };
            this.line_info.push(t);
          }
        }
        this.option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: charts.tooltipBackgroundColor
              }
            },
            backgroundColor: charts.bg,
            padding: [5, 10],
            textStyle: {
              color: charts.textColor,
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
          },
          legend: {
            right: 20,
            orient: 'vertical',
            data: this.info
          },
          toolbox: {
            right: '50%',
            feature: {
              dataZoom: {},
              saveAsImage: {},
              restore: {},
              magicType: {
                type: ['line', 'bar']
              },
            }
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 60,
              end: 100
            },
            {
              type: 'inside',
              realtime: true,
              start: 60,
              end: 100
            }
          ],
          xAxis: {
            type: 'category',
            data: this.date,
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: charts.axisLineColor
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                color: [charts.axisLineColor]
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: charts.axisLineColor
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            }
          },
          series: this.line_info
        };
      });
      this.showloading = false;
    });
  }
}
