import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Output() addEvent: EventEmitter<any> = new EventEmitter();

  id: number;
  patient: string;
  age: number;
  title: string;
  notes: string;
  start: Date;
  end: Date;

  constructor() {}

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

    this.addEvent.emit(event);
    console.log('submit', event);
  }
}
