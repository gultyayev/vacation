export interface EmployeeListResponseInterface {
  list: {
    __v: number;
    _id: string;

    createdAt: string;
    updatedAt: string;

    /** Employee name */
    name: string;

    /** Employee started working at */
    startDate: string;

    /** Employee ended working at */
    endDate?: string;

    /** History of days added & used */
    history: any[];
  }[];
}
