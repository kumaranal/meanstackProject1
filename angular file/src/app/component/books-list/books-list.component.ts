// import { Component, OnInit } from '@angular/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { crud } from 'src/app/service/crud';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books:any=[];
  constructor(private formBuilder:FormBuilder,private router:Router,private ngZone:NgZone,private crudApi:crud) { }

  ngOnInit(): void {
    this.crudApi.getAllBook().subscribe(res=>{
      console.log(res);
      this.books=res;
    })
  }
  delete(id:any,i:any){
    this.crudApi.deleteBook(id).subscribe(res=>{
      this.books.splice(i,1);
    })
  }
  edit(id:any){
    this.ngZone.run(()=>{
      this.router.navigateByUrl(`editbook/${id}`)
    })
  }
}
