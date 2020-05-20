import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeekViewComponent } from './components/week-view/week-view.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventItemComponent } from './components/event-item/event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekViewComponent,
    EventFormComponent,
    EventItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
