import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  myForm!:FormGroup ;
  formdissable=false;
  constructor(private fb:FormBuilder) { 
    this.myForm=this.fb.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Mobileno:['',Validators.required],
      Address:['',Validators.required],
      Email:['',Validators.required],
      Age:['',Validators.required],
      Dob:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  getformdata(){
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
