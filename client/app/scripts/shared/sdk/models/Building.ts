/* tslint:disable */

export interface BuildingInterface {
  id?: number;
  number: string;
  point?: any;
  streetId?: number;
}

export class Building implements BuildingInterface {
  id: number;
  number: string;
  point: any;
  streetId: number;
  constructor(instance?: Building) {
    Object.assign(this, instance);
  }
}
