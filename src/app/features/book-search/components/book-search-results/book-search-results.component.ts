import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html',
  styleUrls: ['./book-search-results.component.scss']
})
export class BookSearchResultsComponent implements OnInit {

  constructor(readonly bookService: BookServiceService) {
  }

  get books(): Book[] {
    return this.bookService.getBooks();
  }
  ngOnInit(): void {
  }

}
