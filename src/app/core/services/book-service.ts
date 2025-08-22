import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BookModel } from '../models/bookModel';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private endpoint = environment.apiBaseUrl + '/books';
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<BookModel[]>(this.endpoint);
  }

  getById(id: string) {
    return this.http.get<BookModel>(`${this.endpoint}/${id}`);
  }


  post(book: BookModel) {
    return this.http.post<BookModel>(this.endpoint, book);
  }

  put(book: BookModel) {
    return this.http.put<BookModel>(`${this.endpoint}/${book.id}`, book);
  }

  delete(id: string) {
    return this.http.delete<BookModel>(`${this.endpoint}/${id}`);
  }
}
