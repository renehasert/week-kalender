import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { format, isWithinInterval, addMinutes, subMinutes } from 'date-fns';

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
      id: 2,
      title: 'Lyme',
      patient: 'Anita Hielzeer',
      age: 46,
      start: new Date('2020-5-20 09:30'),
      end: new Date('2020-5-20 10:00'),
    },
    {
      id: 3,
      title: 'Uitslag',
      patient: 'Frans Leegdans',
      age: 19,
      start: new Date('2020-5-21 22:30:00'),
      end: new Date('2020-5-21 23:00:00'),
    },
    {
      id: 4,
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

  deleteEvent(event: Event) {
    return (this.events = this.events.filter((e) => e !== event));
  }

  checkConflict(event: Event) {
    const conflict: any = this.events.filter((e) => {
      return (
        isWithinInterval(new Date(e.start), {
          start: new Date(event.start),
          end: new Date(event.end),
        }) ||
        isWithinInterval(new Date(e.end), {
          start: new Date(event.start),
          end: new Date(event.end),
        })
      );
    });
    console.log('conflict', conflict);
    return conflict;
  }

  addEvent(event: Event) {
    this.events.push(event);
  }
}
