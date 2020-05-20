import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/Event';
import { format } from 'date-fns';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  @Input() event: Event;

  constructor() {}

  ngOnInit(): void {}
}
