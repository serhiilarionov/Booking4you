/* tslint:disable */

export interface CompanyDetailInterface {
  id?: number;
  companyId: number;
  phone?: any;
  email?: any;
  website?: any;
  workTime?: any;
  imageList?: any;
}

export class CompanyDetail implements CompanyDetailInterface {
  id: number;
  companyId: number;
  phone: any;
  email: any;
  website: any;
  workTime: any;
  imageList: any;
  constructor(instance?: CompanyDetail) {
    Object.assign(this, instance);
  }
}
