import { NgModule } from '@angular/core';
import { BookRegistration } from './components/book-registration/book-registration';
import { BooksRoutingModule } from './books-routing.module';
import { BookSearch } from './components/book-search/book-search';
import { BookEdit } from './components/book-edit/book-edit';

@NgModule({
  declarations: [
    BookRegistration,
    BookSearch,
    BookEdit
  ],
  imports: [BooksRoutingModule],
})
export class BooksModule {}
