import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  AddCustomer:any;
  cus:any;
  addC:any;
  constructor(private myservice:PostService,private router:Router) { }
  

  ngOnInit(): void {
    this.AddCustomer=new FormGroup(
      {
      FirstName:new FormControl(),
      LastName:new FormControl(),
      Country:new FormControl(),
      CreateDate:new FormControl(),
     

      }
      );



  }
  onSubmit()
  {
   this.cus= this.AddCustomer.value;
   
    this.myservice.AddCustomer(this.cus).subscribe((r:any)=>{this.addC=r;});
  }
  get FirstName()
  {
    return this.AddCustomer.get('FirstName');
  }
  get LastName()
  {
    return this.AddCustomer.get('LastName');
  }
  get Country()
  {
    return this.AddCustomer.get('Country');
  }
  get CreateDate()
  {
    return this.AddCustomer.get('CreateDate');
  }
  

}
