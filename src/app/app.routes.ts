import { Routes } from '@angular/router';
import { BooksModule } from './books/books.module';

export const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then((m) => BooksModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books/search',
  },
];
