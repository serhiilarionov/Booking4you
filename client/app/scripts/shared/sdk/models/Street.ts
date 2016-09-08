/* tslint:disable */
import {
  StreetType,
  Building
} from '../index';

export interface StreetInterface {
  id?: number;
  name: string;
  point?: any;
  bound?: any;
  streetTypeId?: number;
  cityId?: number;
  districtId?: number;
  streetType?: StreetType;
  buildings?: Array<Building>;
}

export class Street implements StreetInterface {
  id: number;
  name: string;
  point: any;
  bound: any;
  streetTypeId: number;
  cityId: number;
  districtId: number;
  streetType: StreetType;
  buildings: Array<Building>;
  constructor(instance?: Street) {
    Object.assign(this, instance);
  }
}
