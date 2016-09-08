/* tslint:disable */
import {
  Category,
  Company
} from '../index';

export interface CategoryCompanyInterface {
  categoryId?: number;
  companyId?: number;
  id?: number;
  category?: Category;
  company?: Company;
}

export class CategoryCompany implements CategoryCompanyInterface {
  categoryId: number;
  companyId: number;
  id: number;
  category: Category;
  company: Company;
  constructor(instance?: CategoryCompany) {
    Object.assign(this, instance);
  }
}
