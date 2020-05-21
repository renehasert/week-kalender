import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './views/calendar/calendar.component';
import { EventsComponent } from './views/events/events.component';
import { EventFormComponent } from './components/event-form/event-form.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  {
    path: 'afspraken',
    component: EventsComponent,
  },
  { path: 'toevoegen', component: EventFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
