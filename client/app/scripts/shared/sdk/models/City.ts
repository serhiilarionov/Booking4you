/* tslint:disable */
import {
  District,
  Street
} from '../index';

export interface CityInterface {
  id?: number;
  slug: string;
  name: string;
  nameRu: string;
  active: boolean;
  point?: any;
  bound?: string;
  regionId?: number;
  districts?: Array<District>;
  streets?: Array<Street>;
}

export class City implements CityInterface {
  id: number;
  slug: string;
  name: string;
  nameRu: string;
  active: boolean;
  point: any;
  bound: string;
  regionId: number;
  districts: Array<District>;
  streets: Array<Street>;
  constructor(instance?: City) {
    Object.assign(this, instance);
  }
}
