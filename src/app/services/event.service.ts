import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  getEvents() {
    return [
      {
        id: 1,
        title: 'Rugpijn',
        patient: 'Henk Beenham',
        age: 65,
        start: new Date('2020-5-19 12:30'),
        end: new Date('2020-5-19 14:00'),
      },
      {
        id: 1,
        title: 'Lyme',
        patient: 'Anita Hielzeer',
        age: 46,
        start: new Date('2020-5-20 09:30'),
        end: new Date('2020-5-20 10:00'),
      },
      {
        id: 1,
        title: 'Uitslag',
        patient: 'Frans Leegdans',
        age: 19,
        start: new Date('2020-5-21 14:30:00'),
        end: new Date('2020-5-21 17:00:00'),
      },
      {
        id: 1,
        title: 'Koffiedik pijn',
        patient: 'Max Havelaar',
        age: 92,
        start: new Date('2020-5-21 21:30'),
        end: new Date('2020-5-21 22:00'),
      },
    ];
  }

  addEvent() {}
}
