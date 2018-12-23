import { Component, OnInit } from '@angular/core';
import {FormGroup,NgForm, FormBuilder, Validators, MinLengthValidator, FormArray } from '@angular/forms';
import {HttpClient} from'@angular/common/http';
import { Document } from '../header/document';
import  {FormsModule} from '@angular/forms';
import { ServiceCustomerService } from '../service-customer.service';
import { element } from '@angular/core/src/render3';
import { log } from 'util';






@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
//Selected
  mondocument:  Document = {
     name :'',
     namefile : null,
};
  documentEdit:Document;

  //fileformsGroup: any = FormGroup;
  //checkbox
  states:Array<String>= [];
  fruits: Array<String> = ['mango','crap','orange','Banana'];
  selectedFriuitvalues:Array<String> =[];
  favfruitErreur: Boolean =true;
  form:FormGroup;


  

  onselectedfile(event){
    console.log(event);
    const file = event.target.files[0];
  
    console.log(file);



    
  }

  
  

  constructor(private HttpClient:HttpClient,private fb:FormBuilder,private ServiceCustomerService:ServiceCustomerService) { }


  ngOnInit() {

    this.form =this.fb.group({
     /*  firtname: [null,[Validators.required,Validators.minLength(2)]],
      lastname: [null,Validators.required], */
      favfruit:this.addfruitcontrole(),


    });
   
  }
  addfruitcontrole()
  {
    const arr = this.fruits.map( element   =>{
      return this.fb.control(false);
    });  
    return this.fb.array(arr);

  }
  get fruitsArray()
  {
    return <FormArray>this.form.get('favfruit');
  }
  
  //:selecton
  getselectedFriuitvalue()
  {
    this.selectedFriuitvalues=[]
    this.fruitsArray.controls.forEach((control , i) => {
        if (control.value) {
        this.selectedFriuitvalues.push(this.fruits[i]);

      }
    });
    this.favfruitErreur=this.selectedFriuitvalues.length >0 ?false:true;
     console.log(this.selectedFriuitvalues)
  }
  //pour sms Erreur message touched
  checkControleTouched(){
    let flg =false;
    this.fruitsArray.controls.forEach(control =>{
      if(control.touched)
      {
        flg =true;
      }
    });
    return flg;

  }

  Uploader()
  {


      //console.log(this.fileformsGroup.value);
      //this.userFile = this.fileformsGroup.value;
     //const formdata: FormData = new FormData();
     //this.file = this.fileformsGroup.filer;
      //formaData.append('doc',JSON.stringify(doc));
      //formaData.append('file',this.file);
      //this.ServiceCustomerService.saveUserprofile(formdata,this.userFile).
      //subscribe(data => console.log('modification'+data), error => console.log(error));


      /* .subscribe((data) => {
        console.log(data), error => console.log(error)
      });
 */
      
  

  }

  /* uplodermAFile(form:NgForm)
  {
    this.documentEdit=form.value;
    console.log(this.documentEdit);    

  } */

}
