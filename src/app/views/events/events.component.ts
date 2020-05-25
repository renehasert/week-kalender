import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[];
  selected = 'option2';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService
      .getEvents()
      .sort((a: any, b: any) => a.start - b.start);
  }

  deleteEvent(event: Event) {
    this.events = this.events.filter((e) => e.id !== event.id);
    this.eventService.deleteEvent(event);
  }
}
