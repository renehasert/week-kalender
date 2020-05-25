import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { EventService } from '../../services/event.service';
import { getWeek, addWeeks, subWeeks } from 'date-fns';
import { DAYS_OF_WEEK } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  events: Event[];
  viewDate: Date = new Date();
  locale: string = 'nl';
  weekNumber = getWeek(this.viewDate, { weekStartsOn: 1 });
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
    this.weekNumber = getWeek(this.viewDate, { weekStartsOn: 1 });
  }
  subWeek() {
    this.viewDate = subWeeks(this.viewDate, 1);
    this.weekNumber = getWeek(this.viewDate, { weekStartsOn: 1 });
  }
}
