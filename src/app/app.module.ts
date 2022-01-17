import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';
import { ParkingLotModule } from 'src/modules/parking-lot/parking-lot.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/parkingLot'),
    // MongooseModule.forRoot(
    //   `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@localhost:27017/${process.env.MONGO_DATABASE}`,
    // ),
    // MongooseModule.forRoot('mongodb://moo:111111@localhost:27017/parkingLot'),
    RouterModule.forRoutes(routes),
    ParkingLotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
