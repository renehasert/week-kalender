import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { EventService } from '../../services/event.service';
import { getTime } from 'date-fns';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  form: FormGroup;
  id: number;
  patient: string;
  age: number;
  title: string;
  notes: string;
  start: Date;
  end: Date;

  constructor(
    private eventService: EventService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

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
    if (getTime(event.start) > getTime(event.end)) {
      this.openSnackBar('Eindtijd moet later zijn dan Begintijd', null);
      return;
    }
    const conflict: any = this.eventService.checkConflict(event);
    if (conflict.length !== 0) {
      this.openSnackBar('Tijdstip bezet', null);
    } else {
      this.openSnackBar('Afspraak toegevoegd', null);
      this.eventService.addEvent(event);
      console.log('submit', event);
    }
  }
}
