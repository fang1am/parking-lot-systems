import { Document } from 'mongoose';
export interface ITicketSchema extends Document {
  _id: string;
  plate: string;
  car_size_name: string; //ขนาดรถ
  size: number;
  parking_slot: string; //zone
  entry_time: Date;
  left_time: Date;
  left: boolean;
}
