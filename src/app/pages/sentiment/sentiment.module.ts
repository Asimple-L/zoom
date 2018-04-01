/**
 * Created by Asimple on 2018/3/17.
 */
import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {ThemeModule} from '../../@theme/theme.module';
import {SentimentRoutingModule} from './sentiment-routing.module';
import { SentimentIndexComponent } from './sentiment-index/sentiment-index.component';
import { SentimentResultComponent } from './sentiment-result/sentiment-result.component';
import {SearchKeyGuard} from '../guard/searchKey.guard';
import { PublicPraiseComponent } from './sentiment-result/public-praise/public-praise.component';
import { HotComponent } from './sentiment-result/hot/hot.component';
import { SpreadComponent } from './sentiment-result/spread/spread.component';
import { MoodComponent } from './sentiment-result/mood/mood.component';
import {EchartsService} from '../echarts/echarts.service';

const component = [
  SentimentIndexComponent,
  SentimentResultComponent,
  PublicPraiseComponent,
];

@NgModule({
  imports: [
    NgxEchartsModule,
    ThemeModule,
    SentimentRoutingModule,
  ],
  declarations: [
    ...component,
    HotComponent,
    SpreadComponent,
    MoodComponent,
  ],
  providers: [ SearchKeyGuard, EchartsService],
})

export class SentimentModule { }
