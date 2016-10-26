import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

// under systemjs, moment is actually exported as the default export, so we account for that
const momentConstructor: (value?: any) => moment.Moment = (<any>moment).default || moment;

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | moment.Moment, ...args: any[]): string {
    let utcOffsetValue = args[1] || 0;
    return momentConstructor(value).utcOffset(utcOffsetValue).format(args[0]);
  }
}
