/* tslint:disable */
import {
  Region
} from '../index';

export interface CountryInterface {
  id?: number;
  code: string;
  name: string;
  active: boolean;
  point?: any;
  bound?: any;
  regions?: Array<Region>;
}

export class Country implements CountryInterface {
  id: number;
  code: string;
  name: string;
  active: boolean;
  point: any;
  bound: any;
  regions: Array<Region>;
  constructor(instance?: Country) {
    Object.assign(this, instance);
  }
}
