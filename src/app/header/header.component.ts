import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { ServiceCustomerService } from '../service-customer.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 listcustomers;
 //private baseurl: string = 'http://localhost:4201/api/customers';
  constructor( private ServiceCustomerService:ServiceCustomerService) { }

  ngOnInit() {
    /* ServiceCustomerService. .subscribe(response =>{ this.listcustomers = response; console.log(typeof this.listcustomers);
    },(error)=>{
      console.log(error);
      this.listcustomers=this.listcustomers;
    }
    ) */
    this.listcustomers = this.ServiceCustomerService.getCustomer()
    .subscribe(response =>{ this.listcustomers = response; console.log(typeof this.listcustomers);
    },(error)=>{
      console.log(error);
      this.listcustomers=this.listcustomers;
    }
    ) 
  }

}
