import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
  constructor(private routes: Router) {
  }

  ngOnInit(): void {
  }
  addLimitiword() {
    const wordContent = this.newWord;
    this.newWords.unshift(wordContent);
    this.isAddKeywordHidden = true;
    this.newWord = '';
  }
  send(event) {
    const keyCode = event.keyCode;
    if ( keyCode == 13 ) {
      this.routes.navigate(['/pages/structed/searchcontent'], { queryParams: {'search': this.search}});
    }
  }
}
