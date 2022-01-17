import * as mongoose from 'mongoose';
export const ticketSchema = new mongoose.Schema(
  {
    plate: String,
    car_size_name: String, //ขนาดรถ
    size: Number,
    parking_slot: String, //zone
    entry_time: Date,
    left_time: Date,
    left: Boolean,
  },
  { collection: 'ticket' },
);
