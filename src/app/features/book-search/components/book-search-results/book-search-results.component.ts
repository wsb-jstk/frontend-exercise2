import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../../models/book.model';
import {BookServiceService} from '../../services/book-service.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html',
  styleUrls: ['./book-search-results.component.scss']
})
export class BookSearchResultsComponent {

  @Input()
  books?: Book[];
  subscription?: Subscription;

  constructor(private router: Router) {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  openDetails(bookId: number): void {
    this.router.navigate(['book', bookId]);
  }
}
