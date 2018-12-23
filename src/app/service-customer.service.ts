import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Customer } from './header/customer';
import { Document } from './header/document';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { RequestOptions } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService implements OnInit {

  headers:HttpHeaders=new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl: string = 'http://localhost:4201/api/customers';
  private baseurleditte: string = 'http://localhost:4201/api/custumeredit';
  //private baseUrldoc: string = 'http://localhost:4201/doc/customers';
  private baseUrldoc: string = 'http://localhost:4201/api/file/upload';



  private httpOptions = new RequestOptions({});
  //private base2url: string ="";
  customer : Customer = new Customer();
  document: Document = new Document();

  listcustomer;


  /* private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}  */

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {

   // return this.httpClient.get(this.baseurl).subscribe(response =>{ this.listcustomer = response; console.log(typeof this.listcustomer);
   // }); 

  }
// methode pour recuperer les customers
  getCustomer(): Observable<any> {
    return this.httpClient.get<Customer[]>(this.baseUrl);

  }
  //methode pour ajouter un customer
  addHero (customer: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + `/create`, customer);
  }

  // suppression d'un customer
  deleteCustomerid(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  //recuperation d'un customer
  getCustomerid(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
//modification de customers
updateCustomer(id: number, customer: Customer): Observable<Object> {
  return this.httpClient.put(`${this.baseUrl}/${id}`, customer);
}
updaternew(customer)
{
    return this.httpClient.put(this.baseurleditte, customer);

}
setteUser(customer:Customer)
{
  return this.customer=customer;
  this.getterUser();
  console.log(this.getterUser());

}
//servicze recherche
getCustomersByAge(age: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/age/${age}`);
  }
  

getterUser()
{
  return this.customer;
}
//sauvegarder avec une image 
 saveUserprofile (formData:FormData): Observable<any> 
 {
    return this.httpClient.post(`${this.baseUrldoc}` + `/create`,formData);

}
/* pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', 'http://localhost:8080/doc/file/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  } */
 

  
  



 /*  addHero (customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseurl, customer,).pipe(
      tap((customer: Customer) => this.console.log(`added hero w/ id=${customer.id}`)),
      catchError(this.handleError<Customer>('addHero'))
    );
  } */
  /* onSaveCustomer(customer:Customer)  {
    console.log(this.customer)
this.httpClient.post(`${this.baseUrl}` + `/create`,this.customer)
.pipe(map(resp=>this.headers))
.subscribe(data => {
    
  console.log(data);
} , err=>{
console.log(err);
});

} */


}
