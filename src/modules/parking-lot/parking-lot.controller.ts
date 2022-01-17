import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ParkingLotService } from './parking-lot.service';
@Controller('parking-lot')
export class ParkingLotController {
  constructor(private readonly service: ParkingLotService) {}
  @Post('create-parking')
  createParkingLot(@Body() CreateParkingDto) {
    return this.service.createParkingLot(CreateParkingDto);
  }
  @Post('park-the-car')
  parkTheCar(@Body() body) {
    return this.service.parkTheCar(body);
  }
  @Post('leave-the-slot')
  leaveTheSlot(@Body() body) {
    return this.service.leaveTheSlot(body);
  }
  @Get('status-parking-lot')
  statusParkingLot(@Query() q) {
    return this.service.statusParkingLot();
  }
  @Get('plate-list-by-car-size')
  registrationPlateListByCarSize(@Query() q) {
    return this.service.registrationPlateListByCarSize();
  }
  @Get('zone-list-by-car-size')
  registrationZoneListByCarSize(@Query() q) {
    return this.service.registrationZoneListByCarSize();
  }
}
