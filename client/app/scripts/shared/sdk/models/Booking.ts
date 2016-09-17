/* tslint:disable */
import {
  Company,
  CompanyService,
  Client
} from '../index';

export interface BookingInterface {
  id?: number;
  number: string;
  taskId?: string;
  desc?: string;
  date?: any;
  phone?: string;
  active?: boolean;
  status?: string;
  createdAt?: any;
  updatedAt?: any;
  deletedAt?: any;
  companyId?: number;
  clientId?: number;
  company?: Company;
  services?: Array<CompanyService>;
  user?: Client;
}

export class Booking implements BookingInterface {
  id: number;
  number: string;
  taskId: string;
  desc: string;
  date: any;
  phone: string;
  active: boolean;
  status: string;
  createdAt: any;
  updatedAt: any;
  deletedAt: any;
  companyId: number;
  clientId: number;
  company: Company;
  services: Array<CompanyService>;
  user: Client;
  constructor(instance?: Booking) {
    Object.assign(this, instance);
  }
}
