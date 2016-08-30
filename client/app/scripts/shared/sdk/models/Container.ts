/* tslint:disable */

export interface ContainerInterface {
  id?: number;
}

export class Container implements ContainerInterface {
  id: number;
  constructor(instance?: Container) {
    Object.assign(this, instance);
  }
}
