/* tslint:disable */
import {
  Company,
  CompanyService,
  Client
} from '../index';

export interface BookingInterface {
  id?: number;
  number: string;
  desc?: string;
  date?: any;
  phone?: string;
  active?: boolean;
  status?: number;
  createdAt?: any;
  updatedAt?: any;
  deletedAt?: any;
  companyId?: number;
  companyServiceId?: number;
  userId?: number;
  company?: Company;
  service?: CompanyService;
  user?: Client;
}

export class Booking implements BookingInterface {
  id: number;
  number: string;
  desc: string;
  date: any;
  phone: string;
  active: boolean;
  status: number;
  createdAt: any;
  updatedAt: any;
  deletedAt: any;
  companyId: number;
  companyServiceId: number;
  userId: number;
  company: Company;
  service: CompanyService;
  user: Client;
  constructor(instance?: Booking) {
    Object.assign(this, instance);
  }
}
