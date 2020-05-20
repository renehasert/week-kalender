import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { AppComponent } from './app.component';
import { WeekViewComponent } from './components/week-view/week-view.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    WeekViewComponent,
    EventFormComponent,
    EventItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
