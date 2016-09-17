/* tslint:disable */
import {
  CompanyService,
  CompanyDetail,
  CompanyLocation,
  Booking,
  Category,
  Client
} from '../index';

export interface CompanyInterface {
  id?: number;
  name: string;
  title: string;
  desc?: string;
  photo?: string;
  active: boolean;
  point?: any;
  buildingId?: number;
  streetId?: number;
  districtId?: number;
  cityId?: number;
  room?: string;
  locationDetail?: string;
  fullAddress?: string;
  createdAt?: any;
  updatedAt?: any;
  deletedAt?: any;
  categoryId?: number;
  service?: Array<CompanyService>;
  details?: CompanyDetail;
  location?: CompanyLocation;
  bookings?: Array<Booking>;
  categories?: Array<Category>;
  clients?: Array<Client>;
}

export class Company implements CompanyInterface {
  id: number;
  name: string;
  title: string;
  desc: string;
  photo: string;
  active: boolean;
  point: any;
  buildingId: number;
  streetId: number;
  districtId: number;
  cityId: number;
  room: string;
  locationDetail: string;
  fullAddress: string;
  createdAt: any;
  updatedAt: any;
  deletedAt: any;
  categoryId: number;
  service: Array<CompanyService>;
  details: CompanyDetail;
  location: CompanyLocation;
  bookings: Array<Booking>;
  categories: Array<Category>;
  clients: Array<Client>;
  constructor(instance?: Company) {
    Object.assign(this, instance);
  }
}
