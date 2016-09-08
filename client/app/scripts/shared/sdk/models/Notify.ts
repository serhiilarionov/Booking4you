/* tslint:disable */
import {
  Client
} from '../index';

export interface NotifyInterface {
  id?: number;
  name: string;
  type: string;
  process: string;
  data?: any;
  clientId?: number;
  client?: Client;
}

export class Notify implements NotifyInterface {
  id: number;
  name: string;
  type: string;
  process: string;
  data: any;
  clientId: number;
  client: Client;
  constructor(instance?: Notify) {
    Object.assign(this, instance);
  }
}
