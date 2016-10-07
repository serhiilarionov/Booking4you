import { Directive, OnInit, ElementRef, Input } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[datetimepicker]'
})

export class DateTimePickerDirective implements OnInit {
  public tooltipsRU: any;
  public defaultOptions: any;
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
        showClose: true
      };
    }

    if (this.dateTimePickerOptions.locale.toLocaleLowerCase() === 'ru') {
      this.dateTimePickerOptions.tooltips = this.tooltipsRU;
    }

    $(this.elementRef.nativeElement).datetimepicker(this.dateTimePickerOptions);
  }
}
