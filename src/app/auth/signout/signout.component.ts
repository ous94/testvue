import { Component, OnInit } from '@angular/core';
import { ServiceCustomerService } from 'src/app/service-customer.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/header/customer';
import {FormGroup,FormBuilder,Validators, FormControl   } from '@angular/forms'

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  //private customer;
  nouveau : Customer = new Customer();

  newproduitform= new FormGroup({
    id: new FormControl(''),
    active: new FormControl(''),
    age: new FormControl(''),
    name: new FormControl(''),


  });

  constructor( private ServiceCustomerService:ServiceCustomerService,private FormBuilder:FormBuilder ) {}

  ngOnInit() {
   // this.initform();
  
  }

  initform()
  {
    this.newproduitform = this.FormBuilder.group({
      id:['',Validators.required],
      active:'',
      age:'',
      name:''

    }); 
  }

  onSubmitform()
  {
    console.log(this.newproduitform.value);
     const customerValue =this.newproduitform.value;
     this.ServiceCustomerService.addHero(customerValue).subscribe(data => {
    
      console.log(data);
    } , err=>{
    console.log(err);
    });


    /*this.customer()
    const ct = new Customer(customerValue['id'],
    customerValue['active'],
    customerValue['age'],
    customerValue['name'],
    );
 */

    /* const newcustomer = new Customer (
      customerValue [id],
      customerValue ['active'],
      customerValue [age],
      customerValue ['name']
      );
      this.ServiceCustomerService.getCustomer(newcustomer); */

  }
}
