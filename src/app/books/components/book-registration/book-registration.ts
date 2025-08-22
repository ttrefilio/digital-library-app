import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../../../core/models/bookModel';
import { BookService } from '../../../core/services/book-service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-book-registration',
  standalone: false,
  templateUrl: './book-registration.html',
  styleUrl: './book-registration.css',
})
export class BookRegistration {
  private fb = inject(FormBuilder);
  private service = inject(BookService);

  registrationForm!: FormGroup;
  message = signal('');

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(6)]],
      year: ['', [Validators.required, Validators.min(1901), Validators.max(new Date().getFullYear())]],
      genre: ['', [Validators.required]],
      imageUrl: [''],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const request: BookModel = {
        id: uuidv4(),
        title: this.registrationForm.value.title as string,
        author: this.registrationForm.value.author as string,
        year: this.registrationForm.value.year as number,
        genre: this.registrationForm.value.genre as string,
        imageUrl: this.registrationForm.value.imageUrl as string,
      };

      this.service.post(request).subscribe(() => {
        this.message.set(
          `The book ${request.title} was sucessfully registered.`
        );
        this.registrationForm.reset();
      });
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
