import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeListResponseInterface } from '@vacation/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  constructor(private readonly http: HttpClient) {}

  getList() {
    return this.http.get<EmployeeListResponseInterface>('/api/employee');
  }
}
