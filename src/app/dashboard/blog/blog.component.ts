import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts$: Observable<any>;

  progress = 60;
  strokeWidth = 5;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.posts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(posts => {
          return posts.slice(0, 6);
        }),
        delay(1500)
      );
  }

}
