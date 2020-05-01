import * as mongoose from 'mongoose';

export const EmployeeHistorySchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    comment: String,
    // system | user
    type: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    useNestedStrict: true,
  }
);
