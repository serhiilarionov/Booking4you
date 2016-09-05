/* tslint:disable */
import {
  Company,
  Booking
} from '../index';

export interface CompanyServiceInterface {
  id?: number;
  name: string;
  desc?: string;
  price?: number;
  salePrice?: number;
  currency?: string;
  position: number;
  active: boolean;
  deletedAt?: any;
  companyId?: number;
  categoryId?: number;
  company?: Company;
  bookings?: Array<Booking>;
}

export class CompanyService implements CompanyServiceInterface {
  id: number;
  name: string;
  desc: string;
  price: number;
  salePrice: number;
  currency: string;
  position: number;
  active: boolean;
  deletedAt: any;
  companyId: number;
  categoryId: number;
  company: Company;
  bookings: Array<Booking>;
  constructor(instance?: CompanyService) {
    Object.assign(this, instance);
  }
}
