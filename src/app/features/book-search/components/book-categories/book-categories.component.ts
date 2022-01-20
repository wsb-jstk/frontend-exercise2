import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.component.html',
  styleUrls: ['./book-categories.component.scss'],
})
export class BookCategoriesComponent implements OnInit {
  categories = ['Science fiction', 'Comic book', 'Crime stories and sensation'];

  selectedCategory: string | undefined;

  constructor() {}

  ngOnInit(): void {}
  selectCategory(category:string): void{
    this.selectedCategory = category;
  }
}
