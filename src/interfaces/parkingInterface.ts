import { Document } from 'mongoose';
export interface IParkingSchema extends Document {
  _id: string;
  size_name: string;
  size: number;
  amount: number;
  IsEmpty: boolean;
  zone: string;
}
