import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './features/book-details/book-details.component';
import { BookSearchComponent } from './features/book-search/book-search.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import {BookResolverResolver} from "./book-resolver.resolver";

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: BookSearchComponent},
  { path: 'search/:category', component: BookSearchComponent},
  { path: 'book/:id', component: BookDetailsComponent,
  resolve: {
    book: BookResolverResolver

  }},
  { path: 'not-found', component: NotFoundComponent },
  {path: '**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
