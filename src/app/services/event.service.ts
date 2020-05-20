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
        date: '2020-05-20',
        start: '11',
        end: '12',
      },
      {
        id: 1,
        title: 'Lyme',
        patient: 'Anita Hielzeer',
        age: 46,
        date: '2020-04-17',
        start: '12:30',
        end: '12:50',
      },
      {
        id: 1,
        title: 'Uitslag',
        patient: 'Frans Leegdans',
        age: 19,
        date: '2020-04-27',
        start: '08:30',
        end: '09:50',
      },
      {
        id: 1,
        title: 'Koffiedik pijn',
        patient: 'Max Havelaar',
        age: 92,
        date: '2020-05-17',
        start: '11:30',
        end: '11:50',
      },
    ];
  }

  addEvent() {}
}
