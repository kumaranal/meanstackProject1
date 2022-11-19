import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { crud } from 'src/app/service/crud';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private ngZone:NgZone,private crudApi:crud) {
    //grouping of form values
    
    this.bookForm=this.formBuilder.group({
      name:[''],
      price:[''],
      description:['']
    })
   }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log("bookform",this.bookForm.value);
    this.crudApi.addBook(this.bookForm.value).subscribe((res:any)=>{
      console.log("data added successful");
      this.ngZone.run(()=>{
        this.router.navigateByUrl('booklist')
      }),(err:any)=>{
        console.log(err);
      }
    })
  }

}
