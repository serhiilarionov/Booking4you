import { Component, Input, ViewEncapsulation, OnChanges } from '@angular/core';
import { Company, CompanyApi, Client, ClientApi, AuthService, CoreApi } from '../../../shared/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'booking-form',
  templateUrl: 'scripts/components/booking/form/booking-form.component.html',
  styleUrls: ['scripts/components/booking/form/booking-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookingFormComponent implements OnChanges {
  @Input() company: Company;
  private services: any;
  private servicesSelected: any = [];
  private bookingForm: FormGroup;
  private currentUser: Client;
  private submitSuccessfull: string;

  constructor(private companyApi: CompanyApi,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private clientApi: ClientApi,
              private coreApi: CoreApi) {
    this.currentUser = this.clientApi.getCachedCurrent();
    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
    this.bookingForm = this.formBuilder.group({
      bookingDate: ['', Validators.required],
      bookingTime: ['', Validators.required],
      bookingService: ''
    });
  }

  ngOnChanges() {
    this.companyApi.getService(this.company.id).subscribe((services) => {
      this.services = services;
    });
    this.submitSuccessfull = '';
  }

  onCheck(event, val) {
    if (event.target.checked === true) {
      this.servicesSelected.push(val);
    } else {
      let index = this.servicesSelected.indexOf(val);
      this.servicesSelected.splice(index, 1);
    }
  }

  onSubmit() {

    let dateTime = `${this.bookingForm.value.bookingDate} ${this.bookingForm.value.bookingTime}`;

    this.coreApi.createBooking(
      this.company.id,
      dateTime,
      this.servicesSelected)
      .subscribe(
        (success) => {this.submitSuccessfull = 'success';},
        (error) => {this.submitSuccessfull = 'fail';});
  }
}
