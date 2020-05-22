import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { format, isWithinInterval } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  events = [
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

  getEvents() {
    return this.events;
  }

  addEvent(event) {
    const sameHour: any = this.events.filter((e) => {
      return (
        format(new Date(e.start), 'yyyy-MM-dd  HH') ===
          format(new Date(event.start), 'yyyy-MM-dd  HH') ||
        format(new Date(event.end), 'yyyy-MM-dd  HH') ===
          format(new Date(e.end), 'yyyy-MM-dd  HH')
      );
    });
    console.log(sameHour);
    const conflict: any = sameHour.filter((e) => {
      isWithinInterval(new Date(e.start), {
        start: new Date(event.start),
        end: new Date(event.end),
      }) ||
        isWithinInterval(new Date(e.end), {
          start: new Date(event.start),
          end: new Date(event.end),
        });
    });
    conflict
      ? alert('Er staat al een afspraak op dit tijdstip.')
      : this.events.push(event);
  }
}
