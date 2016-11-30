import { Component } from '@angular/core';
import { Booking, BookingApi, Client, ClientApi, BASE_URL } from '../../shared/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'review-page',
  templateUrl: 'scripts/pages/review/review-page.component.html',
  styleUrls: ['scripts/pages/review/review-page.component.css']
})
export class ReviewPageComponent {
  public bookingId: number;
  public booking: Booking;
  public photoUrl: string;
  public currentUser: Client;
  public allowed: boolean = false;

  constructor(private bookingApi: BookingApi, private activatedRoute: ActivatedRoute, private clientApi: ClientApi) {
    this.bookingId = this.activatedRoute.snapshot.params['bookingId'];
    this.currentUser = this.clientApi.getCachedCurrent();

    this.bookingApi.findById(this.bookingId, {include: {company: ['details']}}).subscribe((booking: Booking) => {
      this.booking = booking;

      if (this.booking.clientId === this.currentUser.id && !this.booking.commented && this.booking.status === 'done') {
        this.allowed = true;
      }

      this.photoUrl = this.booking.company.photo ?
        `${BASE_URL}/storage/test/${this.booking.company.cityId}/${this.booking.company.categoryId}/${this.booking.company.id}/${this.booking.company.photo}` :
        'http://placehold.it/220?text=no+photo';
    });
  }
}
