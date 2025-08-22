import { Component, inject, signal } from '@angular/core';
import { BookModel } from '../../../core/models/bookModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../../core/services/book-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  standalone: false,
  templateUrl: './book-edit.html',
  styleUrl: './book-edit.css',
})
export class BookEdit {
  private fb = inject(FormBuilder);
  private service = inject(BookService);
  private activatedRoute = inject(ActivatedRoute);

  editForm!: FormGroup;
  message = signal('');
  id: any;

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(6)]],
      year: [
        '',
        [Validators.required, Validators.max(new Date().getFullYear())],
      ],
      genre: ['', [Validators.required]],
      imageUrl: [''],
    });

    this.id = this.activatedRoute.snapshot.params['id'];

    this.service.getById(this.id).subscribe((book) => {
      this.editForm.patchValue(book);
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const request: BookModel = {
        id: this.id,
        title: this.editForm.value.title as string,
        author: this.editForm.value.author as string,
        year: this.editForm.value.year as number,
        genre: this.editForm.value.genre as string,
        imageUrl: this.editForm.value.imageUrl as string,
      };

      this.service.put(request).subscribe(() => {
        this.message.set(`The changes were sucessfully saved.`);
      });
    } else {
      this.editForm.markAllAsTouched();
    }
  }
}
