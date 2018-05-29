import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, PageEvent, MatSort, Sort, MatPaginatorIntl } from '@angular/material';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;

  currentPage: PageEvent;
  currentSort: Sort;
  emailsDataSource = new MatTableDataSource<any>();
  totalCount: number;
  constructor(
    private httpClient: HttpClient,
    private matPaginatorIntl: MatPaginatorIntl
  ) { }

  ngOnInit() {
    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    this.getIssuees();

    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      this.currentPage = page;
      this.getIssuees();
    });

    // 設定顯示筆數資訊文字
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        return `第 0 筆、共 ${length} 筆`;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

      return `第 ${startIndex + 1} - ${endIndex} 筆、共 ${length} 筆`;
    };

    // 設定其他顯示資訊文字
    this.matPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
    this.matPaginatorIntl.nextPageLabel = '下一頁';
    this.matPaginatorIntl.previousPageLabel = '上一頁';

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
        // 準備要提供給API的filter資料
        this.currentFilterData = (this.filter.nativeElement as HTMLInputElement).value;
        this.getIssuees();
        // 後端篩選就不需要指定filter了
        // this.emailsDataSource.filter = (this.filter.nativeElement as HTMLInputElement).value;
      });
  }

  changeSort(sortInfo: Sort) {
    if (sortInfo.active === 'created_at') {
      sortInfo.active = 'created';
    }
    this.currentSort = sortInfo;
    this.getIssuees();
  }

  getIssuees() {
    const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    if (this.currentSort.direction) {
      targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    }
    if (this.currentFilterData) {
      targetUrl = `${targetUrl}&q=${this.currentFilterData}+in:title`;
    }
    // https://api.github.com/search/issues?q=repo:angular/material2&page=1&per_page=10&q=build+in:title
    //  console.log(targetUrl);
    this.httpClient
      .get<any>(targetUrl)
      .subscribe(data => {
        this.totalCount = data.total_count;
        this.emailsDataSource.data = data.items;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }

  reply(emailRow) {
    console.log('回覆信件', emailRow);
  }

  delete(emailRow) {
    console.log('刪除信件', emailRow);
  }
}