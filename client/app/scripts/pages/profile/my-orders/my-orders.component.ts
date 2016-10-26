import { Component } from '@angular/core';
import { Client, ClientApi, Booking, BookingApi } from '../../../shared/index';

@Component({
  selector: 'my-orders',
  templateUrl: 'scripts/pages/profile/my-orders/my-orders.component.html',
  styleUrls: ['scripts/pages/profile/my-orders/my-orders.component.css']
})
export class ProfileMyOrdersComponent {
  private currentUser: Client;
  public bookingsList: Array<Booking>;

  constructor(private clientApi: ClientApi, private bookingApi: BookingApi) {
    this.currentUser = this.clientApi.getCachedCurrent();

    this.clientApi.getBookings(this.currentUser.id, {order: 'createdAt DESC', include: {'company': ['details']}})
      .subscribe((bookings) => {
        this.bookingsList = bookings.map((instance) => {
          this.bookingApi.getServices(instance.id).subscribe((services) => {
            services.length ? instance.services = services : false;
          });
          return instance;
        });
      })
  }
}
