import { Document } from 'mongoose';
import { CreateEmployeeDto } from '../dto/create-employee.dto';

export interface Employee extends Document, CreateEmployeeDto {}
