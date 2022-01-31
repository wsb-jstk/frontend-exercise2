import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpClient: HttpClient) { }
  getBooks(criteria:any): Observable<Book[]>{
    let params = new HttpParams()

    if(criteria){
      Object.entries(criteria).forEach(([key, value])=> {
        if(value){
          params = params.append(`${key}_like`, value as string);
        }
      })
    }

    return this.httpClient.get<Book[]>('/api/book',{ params});
  }

  getBook(bookId:number): Observable<Book>{
    return this.httpClient.get<Book>('/api/book/'+bookId);
  }
}
