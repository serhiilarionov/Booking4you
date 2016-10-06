/* tslint:disable */
import {
  CompanyService,
  Company
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
  services?: Array<CompanyService>;
  companies?: Array<Company>;
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
  services: Array<CompanyService>;
  companies: Array<Company>;
  constructor(instance?: Category) {
    Object.assign(this, instance);
  }
}
