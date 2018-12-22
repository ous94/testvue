import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Customer } from './header/customer';
import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { RequestOptions } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService implements OnInit {

  headers:HttpHeaders=new HttpHeaders({'Content-Type': 'application/json'});
  private baseurl: string = 'http://localhost:4201/api/customers';

  private httpOptions = new RequestOptions({});
  //private base2url: string ="";
  customer : Customer = new Customer();

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

  getCustomer(): Observable<any> {
    return this.httpClient.get<Customer[]>(this.baseurl);

  }
 /*  addHero (customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseurl, customer,).pipe(
      tap((customer: Customer) => this.console.log(`added hero w/ id=${customer.id}`)),
      catchError(this.handleError<Customer>('addHero'))
    );
  } */
  onSaveCustomer(customer:Customer)  {
    console.log(this.customer)
this.httpClient.post(this.baseurl+'/create',this.customer)
.pipe(map(resp=>this.headers))
.subscribe(data => {
    
  console.log(data);
} , err=>{
console.log(err);
});

}
addHero (customer: Customer): Observable<any> {
  return this.httpClient.post(this.baseurl+'/create', customer);
}


}
