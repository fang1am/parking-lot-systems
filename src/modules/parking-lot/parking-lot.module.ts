import { Module } from '@nestjs/common';
import { ParkingLotService } from './parking-lot.service';
import { ParkingLotController } from './parking-lot.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { parkingSchema } from 'src/schema/parkingSchema';
import { ticketSchema } from 'src/schema/ticketSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'parking', schema: parkingSchema },
      { name: 'ticket', schema: ticketSchema },
    ]),
  ],
  providers: [ParkingLotService],
  controllers: [ParkingLotController],
})
export class ParkingLotModule {}
