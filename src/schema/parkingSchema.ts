import * as mongoose from 'mongoose';
export const parkingSchema = new mongoose.Schema(
  {
    size_name: String,
    size: Number,
    amount: Number,
    IsEmpty: Boolean,
    zone: String,
  },
  { collection: 'parking' },
);
