import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
  }

  create() {
    this.bookService.createBook(this.bookForm.value).subscribe(() => {
      this.router.navigate(['books/list']);
      // alert('Tạo thành công');
    });
  }
}
