import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EmployeeListService } from './employee-list.service';

@Component({
  selector: 'vacation-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {
  list$ = this.employeeListService.getList();

  constructor(private readonly employeeListService: EmployeeListService) {}

  ngOnInit(): void {}
}
