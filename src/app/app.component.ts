import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'employeemanager-frontend';

  public employees!: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
      this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response: Employee[]) => {
        console.log(this.employees = response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
}
