import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '首页',
    icon: 'nb-home',
    link: '/pages/structed',
    home: true,
  },
  {
    title: '功能',
    group: true,
  },
  {
    title: '结构化',
    icon: 'nb-title',
    link: 'structed',
  },
  {
    title: '语义分析',
    icon: 'nb-compose',
    children: [
      {
        title: 'url数据分析',
        link: 'url'
      },
      {
        title: '文本分析',
        link: 'article'
      },
      {
        title: '文档分析',
        link: 'file'
      }
    ]
  },
  {
    title: '资讯关注',
    icon: 'nb-bar-chart',
    link: 'change',
  },
  {
    title: '舆情查询',
    icon: 'nb-lightbulb',
    link: 'sentiment'
  },
  {
    title: 'API说明',
    icon: 'nb-cloudy',
    children: [
      {
        title: '结构化',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'url数据分析',
        link: '/pages/maps/leaflet',
      },
      {
        title: '文本分析',
        link: '/pages/maps/bubble',
      },
      {
        title: '舆情分析',
        link: '/pages/maps/analyse',
      },
    ],
  },
  {
    title: '关于我们',
    icon: 'nb-sunny',
    children: [
      {
        title: '项目简介',
        link: '/pages/about/project',
      },
      {
        title: '联系我们',
        link: '/pages/about/us',
      },
    ],
  },
];
