import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IParkingSchema } from 'src/interfaces/parkingInterface';
import { ITicketSchema } from 'src/interfaces/ticketInterface';
@Injectable()
export class ParkingLotService {
  constructor(
    @InjectModel('parking')
    private readonly parkingModel: Model<IParkingSchema>,
    @InjectModel('ticket')
    private readonly ticketModel: Model<ITicketSchema>,
  ) {}
  async createParkingLot(CreateParkingDto) {
    const parkingLot = new this.parkingModel(CreateParkingDto);
    return await parkingLot.save();
  }
  async parkTheCar(body) {
    const { car_size, plate } = body;
    const resultParking = await this.parkingModel
      .find({ size: car_size })
      .exec();

    if (resultParking.length === 0) {
      throw new NotFoundException('Not found data');
    }
    const amount = resultParking[0].amount;
    if (amount === 0) {
      await this.parkingModel.updateOne(
        { _id: resultParking[0]._id },
        { $set: { IsEmpty: false } },
      );
      return { message: 'Parking lot is full.' };
    }
    const data = {
      plate: plate,
      car_size_name: resultParking[0].size_name,
      size: +car_size,
      parking_slot: resultParking[0].zone,
      left: false,
      entry_time: new Date(),
    };
    const parkCar = new this.ticketModel(data);
    await parkCar.save();
    await this.parkingModel.updateOne(
      { _id: resultParking[0]._id },
      { $set: { amount: resultParking[0].amount - 1 } },
    );

    return parkCar;
  }
  async leaveTheSlot(body) {
    const { _id, car_size } = body;
    await this.ticketModel.updateOne(
      { _id: _id },
      { $set: { left: true, left_time: new Date() } },
    );

    const resultParking = await this.parkingModel
      .find({ size: car_size })
      .exec();

    await this.parkingModel.updateOne(
      { _id: resultParking[0]._id },
      { $set: { amount: resultParking[0].amount + 1 } },
    );
    return {
      message: 'Ok, you can leave. Thanks and we hope to see you again.',
    };
  }
  async statusParkingLot() {
    const resultParking = await this.parkingModel.find({}).exec();
    const res = resultParking.map((ele) => {
      return {
        size_name: ele.size_name,
        status: ele.IsEmpty === true ? 'empty parking' : 'full parking',
      };
    });
    return res;
  }
  async registrationPlateListByCarSize() {
    const resultParking = await this.ticketModel.find({}).exec();
    const groups = resultParking.reduce((groups, item) => {
      const group = groups[item.car_size_name] || [];
      group.push(item);
      groups[item.car_size_name] = group;
      return groups;
    }, {});
    return groups;
  }
  async registrationZoneListByCarSize() {
    const resultParking = await this.ticketModel.find({}).exec();
    const groups = resultParking.reduce((groups, item) => {
      const group = groups[item.parking_slot] || [];
      group.push(item);
      groups[item.parking_slot] = group;
      return groups;
    }, {});
    return groups;
  }
}
