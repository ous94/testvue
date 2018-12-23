import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ServiceCustomerService } from '../service-customer.service';
import { log } from 'util';
import { Customer } from 'src/app/header/customer';
import{Router} from '@angular/router';
import  {FormsModule} from '@angular/forms';




@Component({
  selector: 'app-edite-customer',
  templateUrl: './edite-customer.component.html',
  styleUrls: ['./edite-customer.component.css']
})
export class EditeCustomerComponent implements OnInit {
    customer: any;
    custmedit:Customer;

    macustumer: Customer = {
      id:0,
      name:'',
      active:false,
      age:0

    };

  constructor(private ServiceCustomerService : ServiceCustomerService,private router:Router) { }

  ngOnInit() {
       this.initiermodifier();
       this.macustumer.id=this.customer.id;
       this.macustumer.name=this.customer.name;
       this.macustumer.age=this.customer.age;
       this.macustumer.active=this.customer.active;

  }
 
  initiermodifier()
  {
  this.customer =this.ServiceCustomerService.getterUser();
 // console.log(this.customer);
       
  }
   validerModification(form : NgForm)
   {
     this.custmedit=form.value;
    console.log(this.custmedit);
     //this.custmedit =this.macustumer;
        console.log(this.macustumer.id);
     this.ServiceCustomerService.updateCustomer(this.macustumer.id,this.custmedit)
     .
     subscribe(data => console.log(data), error => console.log(error));
    ///this.customer = new Customer();
         this.router.navigate(['']);

   }


   
//maformulatION
   validernew( form : NgForm)
   {
     this.custmedit=form.value;
    console.log(this.custmedit);
     //this.custmedit =this.macustumer;
         //console.log(this.custmedit.id);
     this.ServiceCustomerService.updaternew(this.custmedit)
     
     .
     subscribe(data => console.log('modification'+data), error => console.log(error));
    //this.customer = new Customer();

         this.router.navigate(['']);

   }
  

  

}
