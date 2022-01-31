import {Component, OnInit} from '@angular/core';
import {BookServiceService} from "./services/book-service.service";
import {Book} from "./models/book.model";

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books?: Book[];
  category?:string;
  constructor(private bookService: BookServiceService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks(null).subscribe((books) => {
      this.books = books;
    })

  }

  search(criteria:any) {
    this.bookService.getBooks(criteria).subscribe((books) => {
      this.books = books;
    })
  }
}
