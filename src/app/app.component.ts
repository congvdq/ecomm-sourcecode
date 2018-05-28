import { Component, OnInit } from '@angular/core';
import { Post } from './post';

import { BookService } from './book.service';
import { Book } from './view-model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  books: Book[];


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }
        
      
  }
  

