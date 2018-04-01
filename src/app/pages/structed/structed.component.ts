import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-structed',
  styleUrls: ['./structed.component.scss'],
  templateUrl: './structed.component.html'
})
export class StructedComponent implements OnInit {
  search: string;
  constructor(private routes: Router) {
  }

  ngOnInit(): void {
  }
  send(event) {
    const keyCode = event.keyCode;
    if ( keyCode == 13 ) {
      this.routes.navigate(['/pages/structed/searchcontent'], { queryParams: {'search': this.search}});
    }
  }
}
