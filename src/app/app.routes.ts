import { Routes } from 'nest-router';
import { ParkingLotModule } from 'src/modules/parking-lot/parking-lot.module';

export const routes: Routes = [
  {
    path: '/v1',
    children: [ParkingLotModule],
  },
];
