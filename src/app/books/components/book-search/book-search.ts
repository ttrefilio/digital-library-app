import { Component, signal } from '@angular/core';
import { BookResponseDto } from '../../../core/dtos/book-response-dto';

@Component({
  selector: 'app-book-search',
  standalone: false,
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {
 // Inject Service
 books = signal<BookResponseDto[]>([]);
 isCompleted = signal<boolean>(false);
 message = signal<string>('');

 ngOnInit(): void {
  // call to service

 }

 onDelete(id: string){
  if(confirm('Are you sure you want to delete this book?')){
    // call to service
    this.message.set(`The book @@@@ has been deleted!`);
    this.books.set(this.books().filter(book => book.id !== id));
  }
 }

}
