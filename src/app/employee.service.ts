import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { 
    
  }
  getEmployee(){
    return[
        {id:1,name:"Anurag",age:21},
        {id:2,name:"Sindhu",age:22},
        {id:3,name:"Umesh",age:22},
    ]
    
  }
}
