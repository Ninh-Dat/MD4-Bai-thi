import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  books;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBookById(this.id);
  }

  getBookById(id) {
    this.bookService.getById(id).subscribe(book => {
      this.books = book;
    });
  }
}
