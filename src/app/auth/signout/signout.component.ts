import { Component, OnInit } from '@angular/core';
import { ServiceCustomerService } from 'src/app/service-customer.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/header/customer';
import {FormGroup,FormBuilder,Validators, FormControl   } from '@angular/forms'
import{Router} from '@angular/router';


@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  //private customer;
  customer: Customer = new Customer();

  customers: Observable<Customer[]>;


  newproduitform= new FormGroup({
    id: new FormControl(''),
    active: new FormControl(''),
    age: new FormControl(''),
    name: new FormControl(''),


  });
  nouveau : Customer = new Customer() ;


  constructor( private ServiceCustomerService:ServiceCustomerService,private FormBuilder:FormBuilder,private Route:Router ) {}

  ngOnInit() {
   // this.initform();
  }

  initform()
  {
    /* this.newproduitform = this.FormBuilder.group({
      id:'',
      active:'',
      age:'',
      name:''

    });  */
    this.onSubmitform();
  }

  onSubmitform()
  {
    console.log(this.newproduitform.value);
     this.ServiceCustomerService.addHero(this.newproduitform.value).
     subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.Route.navigate(['']);

  }

  reloadData() {
    this.customers = this.ServiceCustomerService.getCustomer();
  }
     
     //const customerValue =this.newproduitform.value;
     //this.nouveau = this.newproduitform.value;
     /* this.ServiceCustomerService.addHero(this.nouveau).subscribe(data => {
    
      console.log(data);
    } , err=>{
    console.log(err);
    }); */


    /*this.customer()
    const ct = new Customer(customerValue['id'],
    customerValue['active'],
    customerValue['age'],
    customerValue['name'],
    );
 */
   //this.ServiceCustomerService.onSaveCustomer(this.newproduitform.value);

    /* const newcustomer = new Customer (
      customerValue [id],
      customerValue ['active'],
      customerValue [age],
      customerValue ['name']
      );
      this.ServiceCustomerService.getCustomer(newcustomer); */

  
}
