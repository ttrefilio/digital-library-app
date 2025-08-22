import { Component, inject, signal } from '@angular/core';
import { BookService } from '../../../core/services/book-service';
import { BookModel } from '../../../core/models/bookModel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  standalone: false,
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {
  private service = inject(BookService);
  private fb = inject(FormBuilder);

  searchForm!: FormGroup;
  books = signal<BookModel[]>([]);
  filteredBooks = signal<BookModel[]>([]);
  isCompleted = signal<boolean>(false);
  message = signal<string>('');

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });

    this.service.getAll().subscribe((response) => {
      this.books.set(response);
      this.filteredBooks.set(response);
      this.isCompleted.set(true);
    });

    this.searchForm.get('searchTerm')!.valueChanges.subscribe(() => {
      this.filterBooks();
    })
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src =
      'https://manmar.am/storage/products/book_not_found.jpg';
  }

  filterBooks() {
    const term = this.searchForm.get('searchTerm')!.value.toLowerCase();
    this.filteredBooks.set(this.books().filter(book => book.title.toLowerCase().includes(term)));
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.service.delete(id).subscribe(() => {
        this.message.set(`Book has been deleted!`);
        this.books.set(this.books().filter((book) => book.id !== id));
      });
    }
  }
}
