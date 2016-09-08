/* tslint:disable */
import {
  City
} from '../index';

export interface RegionInterface {
  id?: number;
  slug: string;
  name: string;
  countryId: number;
  active: boolean;
  point?: any;
  bound?: any;
  cities?: Array<City>;
}

export class Region implements RegionInterface {
  id: number;
  slug: string;
  name: string;
  countryId: number;
  active: boolean;
  point: any;
  bound: any;
  cities: Array<City>;
  constructor(instance?: Region) {
    Object.assign(this, instance);
  }
}
