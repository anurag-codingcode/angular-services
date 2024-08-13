import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

interface Employee {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-employee-list-details',
  templateUrl: './employee-list-details.component.html',
  styleUrls: ['./employee-list-details.component.scss']
})

export class EmployeeListDetailsComponent implements OnInit {
  constructor(private _employeeListDetails:EmployeeService) {

  }
  public employees:Employee[]=[]
  ngOnInit(): void {
    this.employees=this._employeeListDetails.getEmployee()


  }

}
