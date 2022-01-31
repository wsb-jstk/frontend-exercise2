import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {delay, map, Observable, of, switchMap, tap} from 'rxjs';
import {BookServiceService} from "./features/book-search/services/book-service.service";
import {Book} from "./features/book-search/models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookResolverResolver implements Resolve<Book> {


  constructor(private bookservice: BookServiceService) {
  }


  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    const idString: string = route.paramMap.get('id') || '';

    const id = +idString;
    return this.bookservice.getBook(id).pipe(delay(2000));
  }
}
