import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FilterModalComponent} from './filterModal/filtermodal.component';
import {DownloadModalComponent} from './downloadModal/downloadmodal.component';
import {DetailModalComponent} from './detailModal/detailmodal.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-searchcontent',
  styleUrls: ['./searchContent.component.scss'],
  templateUrl: './searchContent.component.html',
})
export class SearchContentComponent implements OnInit {
  titles: Array<string>;
  maps: Map<string, string>;
  allTitles: Array<string>;
  allMaps: Map<string, string>;
  searchUrl: string;
  dataSourse: Observable<any>;
  paginationModel = 1;
  firstPage = 1;
  curPage = 1;
  totalCount = 0; // 总数据量
  pageCounts = 10; // 每页展示的条数
  totalPages = 0;
  infoIndex: Array<string> ;
  infoData: string;
  pagesArray: Array<number>;
  constructor(private routerInfo: ActivatedRoute, private http: HttpClient
  , private buttonModalService: NgbModal) {
  }

  ngOnInit(): void {
    this.infoIndex = new Array<string>();
    this.searchUrl = this.routerInfo.snapshot.queryParams['search'];
    this.dataSourse = this.http.get('/api/search', { params: { 'keyword': this.searchUrl, 'page': '1'}} );
    this.dataSourse.subscribe((data) => {
     this.infoData = data;
     this.totalCount = data['counts'];
     this.totalPages = this.totalCount / this.pageCounts;
     if (this.totalPages < 4) {
       this.pagesArray = new Array(this.totalPages);
     }
     for (const info in data['info']) {
       if (info) {
         this.infoIndex.push(info);
       }
     }
    });
  }
  showFilterModal() {
    const filterModal = this.buttonModalService.open(FilterModalComponent, {
      size: 'lg',
      backdrop: 'static',
      container: 'nb-layout',
    });
    filterModal.componentInstance.modalHeader = '在检索结果保留或排除包含检索式的实例';
    filterModal.componentInstance.modalContent = '';
  }
  showDownloadModal() {
    const downloadModal = this.buttonModalService.open(DownloadModalComponent, {
      size: 'lg',
      backdrop: 'static',
      container: 'nb-layout',
    });
    downloadModal.componentInstance.modalHeader = '下载';
    downloadModal.componentInstance.modalContent = '';
  }
  showDetailModal(id: any) {
    const detailModal = this.buttonModalService.open(DetailModalComponent, {
      size: 'lg',
      backdrop: 'static',
      container: 'nb-layout',
    });
    detailModal.componentInstance.modalHeader = '详情';
    detailModal.componentInstance.modalContent = id;
  }
  nextPage() {
    if (this.curPage < this.totalPages ) {
      this.curPage += 1;
      this.paginationModel = this.paginationModel + 1;
      if (this.paginationModel > 4 && this.paginationModel > this.firstPage + 3) {
        this.firstPage += 1;
      }
      this.infoIndex = new Array<string>();
      this.dataSourse = this.http.get('/api/search', {params: {'keyword': this.searchUrl, 'page': this.curPage.toString()}});
      this.dataSourse.subscribe((data) => {
        this.infoData = data;
        for (const info in data['info']) {
          if (info) {
            this.infoIndex.push(info);
          }
        }
      });
    }
  }
  prevPage() {
    this.curPage -= 1;
    if (this.curPage < 1) {
      this.curPage = 1;
    }
    this.paginationModel = this.paginationModel - 1;
    if (this.paginationModel < 1) {
      this.paginationModel = 1;
    }else {
      if (this.firstPage > 1) {
        this.firstPage = this.firstPage - 1;
      }else {
        this.firstPage = 1;
      }
    }
    this.infoIndex = new Array<string>();
    this.dataSourse = this.http.get('/api/search', {params: {'keyword': this.searchUrl, 'page': this.curPage.toString()}});
    this.dataSourse.subscribe((data) => {
      console.log(data['counts']);
      console.log(data);
      this.infoData = data;
      for (const info in data['info']) {
        if (info) {
          this.infoIndex.push(info);
        }
      }
    });
  }
  showPage(n) {
    this.curPage = n;
    this.paginationModel = n;
    this.infoIndex = new Array<string>();
    this.dataSourse = this.http.get('/api/search', {params: {'keyword': this.searchUrl, 'page': this.curPage.toString()}});
    this.dataSourse.subscribe((data) => {
      console.log(data['counts']);
      this.infoData = data;
      for (const info in data['info']) {
        if (info) {
          this.infoIndex.push(info);
        }
      }
    });
  }
}

