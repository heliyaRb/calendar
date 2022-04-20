import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import {
  MaterialPersianDateAdapter,
  PERSIAN_DATE_FORMATS,
} from './shared/material.persian-date.adapter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useFactory: serviceFactory,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function serviceFactory() {
  const calendarType: 'shamsi' | 'miladi' | any = localStorage.getItem('clr');

  if (calendarType === 'shamsi') return new MaterialPersianDateAdapter();
  return new NativeDateAdapter('en-US');
}
