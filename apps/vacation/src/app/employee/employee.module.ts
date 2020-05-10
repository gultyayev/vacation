import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './emploee-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
