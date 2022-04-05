import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = [];

  constructor(private bookService: BookService,
              private route: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    });
  }

  // delete(id) {
  //   if (confirm('Are you sure?')) {
  //     this.bookService.deteteBook(id).subscribe(() => {
  //       this.route.navigate(['books/list']);
  //     });
  //   } else {
  //     this.getAll();
  //   }
  // }
  delete(id) {

    if (confirm('are you sure')) {
      this.bookService.deteteBook(id).subscribe(() => {
        this.getAll();
      }, () => {
      });
    } else {
      this.getAll();
    }
  }
}
