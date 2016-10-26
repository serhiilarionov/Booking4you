import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { TODAY_DATE } from '../../shared/index';

import 'moment';
import 'moment/locale/ru';
declare var System: any;
declare var $: any;

@Directive({
  selector: '[datetimepicker]'
})

export class DateTimePickerDirective implements OnInit {
  public tooltipsRU: any;
  @Input('datetimepicker') dateTimePickerOptions: any;

  constructor(private elementRef: ElementRef) {

    this.tooltipsRU = {
      today: 'Сегодня',
      clear: 'Очистить',
      close: 'Закрыть',
      selectMonth: 'Выбрать месяц',
      prevMonth: 'Предыдущий месяц',
      nextMonth: 'Следующий месяц',
      selectYear: 'Выбрать год',
      prevYear: 'Предыдущий год',
      nextYear: 'Следующий год',
      selectDecade: 'Выбрать десятилетие',
      prevDecade: 'Предыдущее десятилетие',
      nextDecade: 'Следующее десятилетие',
      prevCentury: 'Предыдщее столетие',
      nextCentury: 'Следующее столетие'
    };
  }

  ngOnInit() {
    if (!this.dateTimePickerOptions) {
      this.dateTimePickerOptions = {
        format: 'YYYY-MM-DD',
        locale: 'ru',
        stepping: 5,
        showTodayButton: true,
        showClear: true,
        showClose: true,
        minDate: TODAY_DATE.setHours(0, 0, 0)
      };
    }

    if (this.dateTimePickerOptions.locale.toLocaleLowerCase() === 'ru') {
      this.dateTimePickerOptions.tooltips = this.tooltipsRU;
    }

    System.import('bootstrap-datetimepicker').then(() => {
      $(this.elementRef.nativeElement).datetimepicker(this.dateTimePickerOptions);
    });
  }
}
