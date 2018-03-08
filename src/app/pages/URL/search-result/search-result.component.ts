import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  info: string;
  constructor( private routeInfo: ActivatedRoute) {
    this.info = this.routeInfo.snapshot.queryParams['url'];
  }

  ngOnInit() {
  }

}
