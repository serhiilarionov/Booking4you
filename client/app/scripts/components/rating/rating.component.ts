import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Component({
  selector: 'star-rating',
  templateUrl: 'scripts/components/rating/rating.component.html',
  styleUrls: ['scripts/components/rating/rating.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true},
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => RatingComponent), multi: true}
  ]
})

export class RatingComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() max: number = 5;
  @Input() required: boolean;
  @Input() show: number;
  @Input() disable: boolean = false;

  public ratingRanges: Array<Object> = [];

  private model: number;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  writeValue(value: number): void {
    this.model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(c: AbstractControl) {
    if (this.required && !c.value) {
      return {
        required: true
      };
    }
    return null;
  }

  ngOnInit() {
    this.show ? this.showRating(this.show) : this.buildRanges(this.max);
  }

  public setHovered(star: number) {
    if (this.show || this.disable) {
      return;
    }
    this.ratingRanges = this.ratingRanges.map((instance) => {
      (instance['value'] <= star) ? instance['fill'] = true : instance['fill'] = false;
      return instance;
    });
  }

  public clearHovered() {
    if (this.model > 0 || this.show) {
      this.setHovered(this.model);
      return;
    }
    this.ratingRanges = this.ratingRanges.map((instance) => {
      instance['fill'] = false;
      return instance;
    });
  }

  public setRating(value: number) {
    if (this.show || this.disable) {
      return;
    }
    this.setHovered(value);
    this.model = value;
    this.onChange(value);
  }

  public showRating(value: number) {
    let integer;
    let float = 0;

    if (value % 1 !== 0) {
      let floated = value.toFixed(2).toString().split('.');
      integer = parseInt(floated[0], 10) + 1;
      float = parseInt(floated[1], 10);
    } else {
      integer = value;
    }

    (this.max < integer) ? this.buildRanges(integer) : this.buildRanges(this.max);

    this.ratingRanges = this.ratingRanges.map((instance) => {
      if ((instance['value'] === integer) && float) {
        instance['floatClass'] = `fill_${float}`;
      }
      if (instance['value'] <= integer) {
        instance['fill'] = true;
      }
      return instance;
    });
  }

  private buildRanges(range) {
    this.ratingRanges = this.buildRangeArray(1, range);
  }

  private buildRangeArray(start, end) {
    const arr: Array<Object> = [];
    for (let i = start; i <= end; i++) {
      arr.push({value: i, fill: false, floatClass: ''});
    }
    return arr;
  }
}
