/* tslint:disable */

export interface StreetTypeInterface {
  id?: number;
  name: string;
}

export class StreetType implements StreetTypeInterface {
  id: number;
  name: string;
  constructor(instance?: StreetType) {
    Object.assign(this, instance);
  }
}
