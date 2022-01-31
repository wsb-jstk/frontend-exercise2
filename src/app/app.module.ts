import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './features/book-search/book-search.component';
import { BookSearchCriteriaComponent } from './features/book-search/components/book-search-criteria/book-search-criteria.component';
import { BookSearchResultsComponent } from './features/book-search/components/book-search-results/book-search-results.component';
import { BookCategoriesComponent } from './features/book-search/components/book-categories/book-categories.component';
import { HeaderComponent } from './shared/header/header.component';
import { BookSearchResultComponent } from './features/book-search/components/book-search-result/book-search-result.component';
import { BookDetailsComponent } from './features/book-details/book-details.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookSearchCriteriaComponent,
    BookSearchResultsComponent,
    BookCategoriesComponent,
    HeaderComponent,
    BookSearchResultComponent,
    BookDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
