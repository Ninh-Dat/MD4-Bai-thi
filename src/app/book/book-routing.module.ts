import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookUpdateComponent} from './book-update/book-update.component';


const routes: Routes = [
  {
    path: 'list',
    component: BookListComponent,
  },
  {
    path: 'detail',
    component: BookDetailComponent,
  },
  {
    path: 'create',
    component: BookCreateComponent,
  },
  {
    path: 'edit/:id',
    component: BookUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
