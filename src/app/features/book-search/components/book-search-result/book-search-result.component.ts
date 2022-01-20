import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-search-result',
  templateUrl: './book-search-result.component.html',
  styleUrls: ['./book-search-result.component.scss']
})
export class BookSearchResultComponent implements OnInit {

  @Input()
  book?: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
