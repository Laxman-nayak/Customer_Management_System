import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 url="https://localhost:7284/api/webapi";
  constructor(private httpclient:HttpClient) {  }
  displayCustomerList()
  {
    return this.httpclient.get(this.url);
  }

  AddCustomer(cus:any) {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
    return this.httpclient.post(this.url+"/register",cus,{headers});
  }
  deleteCustomer(id:any)
  {
   return this.httpclient.delete(this.url+"/"+id);
  }
  updateCustomer(Id:any)
{
 return this.httpclient.get(this.url+"/getrecord?id="+Id);
}
updateNewData(c:any)
{
  const headers = { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': '',
};
return this.httpclient.put(this.url,c,{headers});
}
viewcustomerServicebyId(id:number)
   {
    return this.httpclient.get(this.url+"/getrecord?id="+id);
   }


}
