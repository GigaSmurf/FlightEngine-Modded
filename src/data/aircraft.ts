import { Aircraft } from '../types';

// function getRandomInt(min: number, max: number) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export const aircraft: Aircraft[] = [
  {
    model: '738',
    passengerCapacity: { total: 160, main: 144, first: 16},
    speed: 400,
  },
  {
    model: '757',
    passengerCapacity: { total: 176, main: 160, first: 16},
    speed: 380,
  },
  {
    model: '321',
    passengerCapacity: { total: 181, main: 165, first: 16},
    speed: 400,
  },
];
