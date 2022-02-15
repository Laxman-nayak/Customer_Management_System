import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
        this.AddCustomer.controls['CreateDate'].setValue(this.resData?.createDate);
        
      });
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

backtoView()
{
  
  this.router.navigate(['/maindashboard']);
  
}

  }
  interface resultdata{
    id:number;
    firstName:string;
    createDate:Date;
    country:string;
    lastName:string;
   
 }
 
  