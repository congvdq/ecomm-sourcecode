import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './view-model/book';

@Injectable()
export class BookService {
  private postsUrl = 'http://green-web-bookstore.herokuapp.com/api/books';
  constructor(
    private http: HttpClient,
  ) { }

  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.postsUrl);
      
  }

}
