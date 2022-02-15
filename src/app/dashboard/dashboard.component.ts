import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class UpdateCustomerComponent implements OnInit {
  AddCustomer:any;
  Id: any;
  resData:any;
  cus:any;
  addC:any;
  data: any;
  CustomerId: any;
  result: any;

  

  constructor(private myservice:PostService,private router:Router,private aR:ActivatedRoute) { }


  ngOnInit(): void {
    this.AddCustomer=new FormGroup(
      {
        FirstName:new FormControl(),
        LastName:new FormControl(),
        Country:new FormControl(),
        CreateDate:new FormControl(),
       
  
      }
      );
      
      this.Id=this.aR.snapshot.params['id'];
      this.myservice.updateCustomer(this.Id).subscribe((r:any)=>
      {this.resData=r;

        this.AddCustomer.controls['FirstName'].setValue(this.resData?.firstName);
        
        this.AddCustomer.controls['LastName'].setValue(this.resData?.lastName);
  
        this.AddCustomer.controls['Country'].setValue(this.resData?.country);
        this.AddCustomer.controls['CreateDate'].setValue(this.resData?.createdate);
        
      });
  }
/*  onSubmit()
{
 this.cus= this.AddCustomer.value;

 this.cus.CustomerId=parseInt(this.Id);
 //alert( this.cus.Id);
  this.myservice.updateNewData(this.cus).subscribe((r:any)=>{
    //this.addC=r;
    alert(r);
  });
 // window.location.reload();
 // this.router.navigate(['/maindashboard']);
}*/


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



  }
  interface resultdata{
    id:number;
    firstName:string;
    
    country:string;
    lastName:string;
    createdate:Date;
   
 }
  
