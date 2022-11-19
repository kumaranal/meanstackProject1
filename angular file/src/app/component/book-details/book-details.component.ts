// import { Component, OnInit } from '@angular/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { crud } from 'src/app/service/crud';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  getId: any;
  updateForm!: FormGroup ;
  constructor(private formBuilder:FormBuilder,private router:Router,private ngZone:NgZone,private crudApi:crud,
    private activatedRoute:ActivatedRoute) {
    this.getId=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId);
    this.crudApi.getBook(this.getId).subscribe(res=>{
      // console.log("res",res);
      this.updateForm.setValue({
        name:res['name'],
        price:res['price'],
        description:res['description']
      })
    });
    this.updateForm=this.formBuilder.group({
      name:[''],
      price:[''],
      description:['']
    })

    }


  ngOnInit(): void {
  }
  onUpdate(){
    console.log("updateForm",this.updateForm.value);
    this.crudApi.updateBook(this.getId,this.updateForm.value).subscribe(res=>{
      console.log("data updated success");
      this.ngZone.run(()=>{
        this.router.navigateByUrl('booklist')
      }),
      (err:any)=>{
        console.log(err);
      }
    })
  }

}
