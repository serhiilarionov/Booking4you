/* tslint:disable */
import {
  Street
} from '../index';

export interface DistrictInterface {
  id?: number;
  name: string;
  point?: any;
  bound?: any;
  cityId?: number;
  streets?: Array<Street>;
}

export class District implements DistrictInterface {
  id: number;
  name: string;
  point: any;
  bound: any;
  cityId: number;
  streets: Array<Street>;
  constructor(instance?: District) {
    Object.assign(this, instance);
  }
}
