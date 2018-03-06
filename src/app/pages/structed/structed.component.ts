import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-structed',
  styleUrls: ['./structed.component.scss'],
  templateUrl: './structed.component.html'
  // template: '<div>structed works!!</div><router-outlet></router-outlet>',
})
export class StructedComponent implements OnInit {
  search: string;
  isAddKeywordHidden = true;
  newWord = '';
  newWords: string[] = [''];
  maps: Map<string, string>;
  options: any = {};
  themeSubscription: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
  addLimitiword() {
    const wordContent = this.newWord;
    this.newWords.unshift(wordContent);
    this.isAddKeywordHidden = true;
    this.newWord = '';
  }
}
