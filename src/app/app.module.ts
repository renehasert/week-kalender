import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { AppComponent } from './app.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './views/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EventsComponent } from './views/events/events.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    EventItemComponent,
    CalendarComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
