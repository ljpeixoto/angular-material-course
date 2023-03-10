import { NativeDateAdapter } from '@angular/material/core';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import {Platform} from "@angular/cdk/platform";

export const MONTH_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM',
  },
  display: {
    dateInput: 'YYYY-MM',
    monthYearLabel: 'YYYY-MM',
    dateA11yLabel: 'YYYY-MM',
    monthYearA11yLabel: 'YYYY-MM',
  }
};

@Injectable()
export class MonthDateAdapter extends NativeDateAdapter {

  constructor(matDateLocale: string, platform: Platform) {
    super(matDateLocale, platform);
    moment.locale('pt-br');
    console.log('MonthDateAdapter initialized');
  }
  format(date: Date, displayFormat: any): string {
    console.log('MonthDateAdapter format', displayFormat);
    if (displayFormat === 'YYYY-MM') {
      return moment(date).format('YYYY-MM')
    }
    return date.toLocaleDateString();
  }

  parse(value: any, parseFormat?: any): Date | null {
    console.log('MonthDateAdapter parse');
    return moment(value, 'YYYY-MM').toDate();
  }

}


