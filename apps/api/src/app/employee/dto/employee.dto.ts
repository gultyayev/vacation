import { DATE_FORMAT } from '@vacation/utils';
import * as moment from 'moment';
import {
  BaseDbDto,
  BaseDbDtoCtorInterface,
} from '../../shared/dto/base-db.dto';
import { CreateEmployeeHistoryDto } from '../../employee-history/dto/create-employee-history.dto';

/** Employee DTO for response */
export class EmployeeDto extends BaseDbDto {
  /** Employee name */
  name: string;

  /** Employee started working at */
  startDate: string;

  /** Employee ended working at */
  endDate?: string;

  /** History of days added & used */
  history: any[];

  constructor(employee: Partial<EmployeeDtoCtor> = {}) {
    super();
    Object.assign(this, employee);

    if (this.startDate) {
      this.startDate = moment(this.startDate).format(DATE_FORMAT);
    }

    if (this.createdAt) {
      this.createdAt = moment(this.createdAt).format(DATE_FORMAT);
    }

    if (this.updatedAt) {
      this.updatedAt = moment(this.updatedAt).format(DATE_FORMAT);
    }

    if (this.endDate) {
      this.endDate = moment(this.endDate).format(DATE_FORMAT);
    }

    if (this.history?.length) {
      this.history = this.history.map((h) => ({
        amount: h.amount,
        type: h.type,
        comment: h.comment,
      }));
    }
  }
}

interface EmployeeDtoCtor extends BaseDbDtoCtorInterface {
  /** Employee name */
  name: string;

  /** Employee started working at */
  startDate: Date;

  /** Employee ended working at */
  endDate?: Date;

  /** History of days added & used */
  history: any[];
}
