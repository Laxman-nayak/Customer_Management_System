import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  result: any;
  result12:any;
 AddCustomer:any;
  closeResult: any;cus: any;
  addC: any;
  UpdateCustomer:any;
  Id: any;

  constructor(private myservice:PostService,private router:Router,private modalService: NgbModal,private aR:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.AddCustomer=new FormGroup(
      {
      FirstName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      LastName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      Country:new FormControl('',[Validators.required,Validators.maxLength(15)]),
     

      }
      );
    this.myservice.displayCustomerList().subscribe((r: any)=>{this.result=r;});
  }
  deleteRecords(id:any)
{
  if(window.confirm("Are You Sure? To Delete"))
  this.myservice.deleteCustomer(id).subscribe((r:any)=>{this.result=r;});
   window.location.reload();
      
}
gotolist()
{
  this.router.navigate(['/addcustomer']);
}

/*UpdateRecords(Id:any)
{
//this.newId=Id;
  //this.myservice.updateEmployee(id).subscribe((r:any)=>{this.res=r;});
  this.router.navigate(['/updatecustomer',Id]);
 
}*/
gotolists()
{
  this.router.navigate(['/view']);
}
open(content: any,CustomerId:any) {
  this.myservice.viewcustomerServicebyId(CustomerId).subscribe(r=>{this.result12=r;});
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason: any) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }

  
}


addcustomer(content1: any) {
 
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason: any) => {
    this.closeResult = `Dismissed ${this.getDismissReason1(reason)}`;
  });
  
  
}
private getDismissReason1(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }

  
}

onSubmit()
  {
   this.cus= this.AddCustomer.value;
   
    this.myservice.AddCustomer(this.cus).subscribe((r:any)=>{this.addC=r;});
   // this.router.navigate(['/maindashboard']);
    window.location.reload();
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
