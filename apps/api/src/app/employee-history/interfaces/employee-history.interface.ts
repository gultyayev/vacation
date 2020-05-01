import { Document } from 'mongoose';
import { CreateEmployeeHistoryDto } from '../dto/create-employee-history.dto';

export interface EmployeeHistory extends Document, CreateEmployeeHistoryDto {}
