import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  url = '';
  constructor(private routes: Router) {
  }

  ngOnInit() {
  }
  send(event) {
    const keyCode = event.keyCode;
    if ( keyCode == 13 ) {
      this.routes.navigate(['/pages/url/search-result'], { queryParams: {'url': this.url}});
    }
  }

}
