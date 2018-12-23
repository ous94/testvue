import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms'; 
@Component({
  selector: 'app-box-multiple',
  templateUrl: './box-multiple.component.html',
  styleUrls: ['./box-multiple.component.css']
})
export class BoxMultipleComponent  {

  form: FormGroup; 
  orders = [ { id: 100, name: 'order 1' }, { id: 200, name: 'order 2' }, { id: 300, name: 'order 3' }, { id: 400, name: 'order 4' } ]; 
  constructor(private formBuilder: FormBuilder) 
{ // Create a new array with a form control for each order 
  const controls = this.orders.map(c => new FormControl(false)); 
  controls[0].setValue(true); 
  // Set the first checkbox to true (checked) 
  this.form = this.formBuilder.group({ 
    orders: new FormArray(controls) 
  }); 
} 

get fruitsArray()
  {
    return <FormArray>this.form.get('favfruit');
  }



submit() 
{
   const selectedOrderIds = this.form.value.orders .map((v, i) => v ? this.orders[i].id : null) .filter(v => v !== null); 
   console.log(selectedOrderIds); 
} 
} 
