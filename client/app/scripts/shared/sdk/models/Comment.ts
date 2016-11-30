/* tslint:disable */
import {
  Company,
  Booking,
  Client
} from '../index';

export interface CommentInterface {
  id?: number;
  positiveMessage?: string;
  negativeMessage?: string;
  rating: number;
  displayName?: string;
  createdAt?: any;
  companyId?: number;
  bookingId?: number;
  clientId?: number;
  company?: Company;
  booking?: Booking;
  user?: Client;
}

export class Comment implements CommentInterface {
  id: number;
  positiveMessage: string;
  negativeMessage: string;
  rating: number;
  displayName: string;
  createdAt: any;
  companyId: number;
  bookingId: number;
  clientId: number;
  company: Company;
  booking: Booking;
  user: Client;
  constructor(instance?: Comment) {
    Object.assign(this, instance);
  }
}
