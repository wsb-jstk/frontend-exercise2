import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map, Subscription, switchMap, tap} from 'rxjs';
import {BookServiceService} from "../book-search/services/book-service.service";
import {Book} from "../book-search/models/book.model";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book!: Book;
  subscription!: Subscription;

  constructor(private route: ActivatedRoute) {
    this.subscription = this.route.data.pipe(
      map(data => data['book'] as Book),
    ).subscribe((book) => {
      this.book = book;});
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
