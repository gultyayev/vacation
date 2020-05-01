import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: { type: Date, required: true },
    endDate: Date,
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeHistory',
      },
    ],
  },
  {
    timestamps: true,
    useNestedStrict: true,
  }
);
