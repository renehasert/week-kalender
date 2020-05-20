import { Component } from '@angular/core';
import { Event } from './models/Event';
import { EventService } from './services/event.service';
import { getWeek, addWeeks, subWeeks } from 'date-fns';
import { DAYS_OF_WEEK } from 'angular-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  events: Event[];
  viewDate: Date = new Date();
  locale: string = 'nl';
  title: string = 'Dr. Dokter';
  weekNumber = getWeek(this.viewDate);
  view: string = 'month';
  weekStartsOn: number = 1;
  weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  addEvent(event: Event) {
    this.events.push(event);
  }
  addWeek() {
    this.viewDate = addWeeks(this.viewDate, 1);
    this.weekNumber = getWeek(this.viewDate);
  }
  subWeek() {
    this.viewDate = subWeeks(this.viewDate, 1);
    this.weekNumber = getWeek(this.viewDate);
  }
}
