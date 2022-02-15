import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'maindashboard',component:MainDashboardComponent},
 
  {path:'updatecustomer/:id',component:UpdateCustomerComponent},
  {path:'addcustomer',component:AddCustomerComponent},
  {path:'view/:id',component:ViewComponent}
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
