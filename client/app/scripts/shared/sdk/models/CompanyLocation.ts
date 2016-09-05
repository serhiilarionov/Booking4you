/* tslint:disable */

export interface CompanyLocationInterface {
  id?: number;
  companyId: number;
  point?: any;
  buildingId?: number;
  streetId?: number;
  districtId?: number;
  cityId?: number;
  room?: string;
  detail?: string;
}

export class CompanyLocation implements CompanyLocationInterface {
  id: number;
  companyId: number;
  point: any;
  buildingId: number;
  streetId: number;
  districtId: number;
  cityId: number;
  room: string;
  detail: string;
  constructor(instance?: CompanyLocation) {
    Object.assign(this, instance);
  }
}
