import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../models/Event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  @Input() event: Event;
  @Output() deleteEvent: EventEmitter<Event> = new EventEmitter();

  constructor(private eventService: EventService) {}

  ngOnInit(): void {}

  onDelete(event) {
    this.deleteEvent.emit(event);
  }
}
