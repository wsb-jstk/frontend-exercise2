import { Component } from '@angular/core';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.component.html',
  styleUrls: ['./book-categories.component.scss'],
})
export class BookCategoriesComponent {
  categories = ['Science fiction', 'Comic book', 'Crime stories and sensation'];
}
