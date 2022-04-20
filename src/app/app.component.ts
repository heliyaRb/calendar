import { Component, Inject, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calendarType: 'miladi' | 'shamsi' = 'shamsi';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  jsonDate = '2018-01-08T20:21:29.4674496';
  dateControl = this.jsonDate;

  constructor(@Inject(DateAdapter) private dateAdapter: any) {
    console.log(localStorage.getItem('clr'));

    if (localStorage.getItem('clr') == 'shamsi') {
      console.log(dateAdapter);
    } else {
      console.log(dateAdapter);
    }
  }

  changeCalendar() {
    if (this.calendarType == 'shamsi' || undefined) {
      this.calendarType = 'miladi';
      localStorage.setItem('clr', this.calendarType);
    } else {
      this.calendarType = 'shamsi';
      localStorage.setItem('clr', this.calendarType);
    }
  }
}
