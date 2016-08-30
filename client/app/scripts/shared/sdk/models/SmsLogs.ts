/* tslint:disable */
import {
  Client
} from '../index';

export interface SmsLogsInterface {
  id?: number;
  status: number;
  phone: string;
  message: string;
  error?: string;
  createdAt?: any;
  updatedAt?: any;
  clientId?: number;
  client?: Client;
}

export class SmsLogs implements SmsLogsInterface {
  id: number;
  status: number;
  phone: string;
  message: string;
  error: string;
  createdAt: any;
  updatedAt: any;
  clientId: number;
  client: Client;
  constructor(instance?: SmsLogs) {
    Object.assign(this, instance);
  }
}
