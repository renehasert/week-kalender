import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  @Input() event: Event;
  @Output() deleteEvent: EventEmitter<Event> = new EventEmitter();

  ngOnInit(): void {}

  onDelete(event: Event) {
    this.deleteEvent.emit(event);
  }
}
