import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookRegistrationRequestDto } from '../../../core/dtos/book-registration-request-dto';

@Component({
  selector: 'app-book-registration',
  standalone: false,
  templateUrl: './book-registration.html',
  styleUrl: './book-registration.css',
})
export class BookRegistration {
  private fb = inject(FormBuilder);

  registrationForm!: FormGroup;
  message = signal('');

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      title: [''],
      author: [''],
      year: [''],
      genre: [''],
    });
  }

  onSubmit() {
    const request: BookRegistrationRequestDto = {
      title: this.registrationForm.value.title as string,
      author: this.registrationForm.value.author as string,
      year: this.registrationForm.value.year as number,
      genre: this.registrationForm.value.genre as string,
    };

    this.message.set(request.title);
  }
}
