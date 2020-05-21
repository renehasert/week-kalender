import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  id: number;
  patient: string;
  age: number;
  title: string;
  notes: string;
  start: Date;
  end: Date;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const event = {
      id: Math.round(Math.random() * 100),
      title: this.title,
      age: this.age,
      patient: this.patient,
      notes: this.notes,
      start: new Date(this.start),
      end: new Date(this.end),
    };

    this.eventService.addEvent(event);
    console.log('submit', event);
  }
}
