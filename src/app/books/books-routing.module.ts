import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRegistration } from './components/book-registration/book-registration';
import { BookSearch } from './components/book-search/book-search';
import { BookEdit } from './components/book-edit/book-edit';

const routes: Routes = [
  { path: 'registration', component: BookRegistration },
  { path: 'search', component: BookSearch },
  { path: 'edit/:id', component: BookEdit },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
