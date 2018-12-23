import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';
import { ServiceCustomerService } from '../service-customer.service';
import { Observable, from } from 'rxjs';
import{Router} from '@angular/router';
import { SignoutComponent } from '../auth/signout/signout.component';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 listcustomers : Customer[];
 rechercherAge : Customer[];

  age: number;

 //customers: Observable<Customer[]>;
 //oundBooks:any=[];
 //@Input() customer: Customer;


 //private baseurl: string = 'http://localhost:4201/api/customers';
  constructor( private ServiceCustomerService:ServiceCustomerService,private router:Router) {
    setTimeout(() => {
      this.reloadData();

      
    }, 2000
     );
   }

  ngOnInit() {
    this.age=0;
    this.reloadData();
    //this.deleteCustomer(this.customer);
    /* ServiceCustomerService. .subscribe(response =>{ this.listcustomers = response; console.log(typeof this.listcustomers);
    },(error)=>{
      console.log(error);
      this.listcustomers=this.listcustomers;
    }
    ) */
    /* this.listcustomers = this.ServiceCustomerService.getCustomer()
    .subscribe(response =>{ this.listcustomers = response; console.log(typeof this.listcustomers);
    },(error)=>{
      console.log(error);
      this.listcustomers=this.listcustomers;
    }
    )  */
  }

  reloadData() {
   // this.customers = this.ServiceCustomerService.getCustomer();
  /*  this.listcustomers = this.ServiceCustomerService.getCustomer()
    .subscribe(response =>{ this.listcustomers = response; 
      console.log(typeof this.listcustomers);
    },(error)=>{
      
      this.listcustomers= Array.of(this.listcustomers);
      console.log(error);
    }
    )  */
    this.ServiceCustomerService.getCustomer().subscribe(
      data =>{this.listcustomers=data},
      error =>{console.log(typeof this.listcustomers)},

      ()=>{console.log('errer chargement des donnés')}
      );
  }

  deleteCustomer(customer) {
    this.ServiceCustomerService.deleteCustomerid(customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.listcustomers.splice(this.listcustomers.indexOf(customer),1);
          
        },
        error => console.log(error));
        this.reloadData();
  }
  newUser()
  {
//pour router vers une une nouvle page il faut importer Router 
//initialiser dans le constructeur
    this.router.navigate(['auth/signup']);

  }
  editecustomer(customer:Customer)
  {
     this.ServiceCustomerService.setteUser(customer); 
      //   console.log(this.ServiceCustomerService.setteUser(customer));

    this.router.navigate(['/edite'])

  }
  // rechercher par age
  private searchCustomers() {
    this.ServiceCustomerService.getCustomersByAge(this.age)
      .subscribe(rechercherAge => this.rechercherAge = rechercherAge);
  }
  //button de validation
  rechercher() {
    this.searchCustomers();
  }
  // suppresiion
  deleteCustomerid(customer)
  {
     this.ServiceCustomerService.deleteCustomerid(customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.rechercherAge.splice(this.rechercherAge.indexOf(customer),1);
          
        },
        error => console.log(error));
        this.reloadData();

  }

// Modification d'un customer
  /* modifiercustomer(customer: Customer) {
    this.ServiceCustomerService.updateCustomer(customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  }
 */
}


