/**
 * Created by Asimple on 2018/3/17.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SentimentIndexComponent} from './sentiment-index/sentiment-index.component';
import {SentimentResultComponent} from './sentiment-result/sentiment-result.component';
import {SearchKeyGuard} from '../guard/searchKey.guard';
import {HotComponent} from "./sentiment-result/hot/hot.component";
import {MoodComponent} from "./sentiment-result/mood/mood.component";
import {PublicPraiseComponent} from "./sentiment-result/public-praise/public-praise.component";
import {SpreadComponent} from "./sentiment-result/spread/spread.component";

const routes: Routes = [
  { path: 'search-index', component: SentimentIndexComponent },
  { path: 'search-result', canActivate: [SearchKeyGuard], component: SentimentResultComponent, children: [
      { path: 'hot', component: HotComponent},
      { path: 'mood', component: MoodComponent},
      { path: 'public-praise', component: PublicPraiseComponent },
      { path: 'spread', component: SpreadComponent},
      { path: '', pathMatch: 'full', redirectTo: 'public-praise'},
    ]},
  { path: '', pathMatch: 'full', redirectTo: 'search-index'}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class SentimentRoutingModule { }
