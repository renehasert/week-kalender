import { Component } from '@angular/core';
import { Event } from './models/Event';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Topicus';
  weekNumber: 1;

  events: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  addEvent(event: Event) {
    this.events.push(event);
  }
}
