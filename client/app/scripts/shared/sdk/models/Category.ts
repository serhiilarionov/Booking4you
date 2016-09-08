/* tslint:disable */
import {
  Company,
  CompanyService
} from '../index';

export interface CategoryInterface {
  id?: number;
  name: string;
  slug: string;
  parentId?: number;
  icon?: string;
  position: number;
  active: boolean;
  deletedAt?: any;
  companies?: Array<Company>;
  services?: Array<CompanyService>;
}

export class Category implements CategoryInterface {
  id: number;
  name: string;
  slug: string;
  parentId: number;
  icon: string;
  position: number;
  active: boolean;
  deletedAt: any;
  companies: Array<Company>;
  services: Array<CompanyService>;
  constructor(instance?: Category) {
    Object.assign(this, instance);
  }
}
