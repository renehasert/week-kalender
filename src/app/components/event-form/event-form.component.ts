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
  date: string;
  startTime: string;
  endTime: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const event = {
      id: Math.round(Math.random() * 100),
      title: this.title,
      age: this.age,
      patient: this.patient,
      notes: this.notes,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
    };

    this.addEvent.emit(event);
    console.log('submit', event);
  }
}
