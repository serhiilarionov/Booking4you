import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Company } from '../../../shared/index';

@Component({
  selector: 'booking-modal',
  templateUrl: 'scripts/components/booking/modal/booking-modal.component.html',
  styleUrls: ['scripts/components/booking/modal/booking-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BookingModalComponent {
    @Input() company: Company;
}
