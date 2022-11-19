import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BooksListComponent } from './component/books-list/books-list.component';
import { AboutComponent } from './component/about/about.component';
const routes: Routes = [
  { path: 'booklist', component: BooksListComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'editbook/:id', component: BookDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
