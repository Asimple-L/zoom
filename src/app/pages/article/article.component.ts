/**
 * Created by Asimple on 2018/3/4.
 */
import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {NbThemeService} from '@nebular/theme';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  styleUrls: ['./article.component.scss'],
  templateUrl: './article.component.html',
})

export class ArticleComponent implements OnInit {
  srcText: FormControl = new FormControl();
  srcTextContent: string;
  constructor(private http: HttpClient, private theme: NbThemeService, private router: Router) {
    this.srcText.valueChanges
      .debounceTime(100)
      .subscribe(value => this.srcTextContent = value);
  }

  ngOnInit(): void {
  }
  toAnalyse() {
    this.router.navigate(['/pages/article/analyse'], { queryParams: { 'article': this.srcTextContent}});
  }
}
