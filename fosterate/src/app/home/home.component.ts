import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
   details={
    name:'',
    mail:'',
    ph:'',
    website:'',
    landline:'',

    Address:" "
  }
  
  constructor( public employeedetails:EmployeesService) {

    
     
     
  
   }
   
   

  ngOnInit(): void {
    this.employeedetails.buttonname='Add'
    if (this.employeedetails.noelements==false){
      this.details={...this.employeedetails.contactlist[this.employeedetails.index]}
    }
    
  }
  editbutton(){
    
    this.employeedetails.buttonname='edit'
  
  }
  showdetails(e:object,idx:number): void{
    this.employeedetails.index=idx
    this.details={...this.employeedetails.contactlist[idx]}
    

  }
  deletebutton(){
    if((this.employeedetails.contactlist.length)==1){
      this.employeedetails.noelements=true
    }
    



    this.employeedetails.contactlist.splice(this.employeedetails.index,1)
    this.details={...this.employeedetails.contactlist[this.employeedetails.index]}
  
  }
  
 
 

}
