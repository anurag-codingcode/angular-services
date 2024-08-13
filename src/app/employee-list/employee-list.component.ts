import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


interface Employee {
  id: number;
  name: string;
  age: number;
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[] = [];
  constructor(private _employeeService:EmployeeService) {
    

  }
  
  ngOnInit(): void {
    this.employees=this._employeeService.getEmployee()

  }

}
