/* tslint:disable */
import {
  Company
} from '../index';

export interface ClientInterface {
  phone?: string;
  phoneVerified?: any;
  realm?: string;
  username?: string;
  password: string;
  challenges?: any;
  email: string;
  emailVerified?: boolean;
  verificationToken?: string;
  status?: string;
  created?: any;
  lastUpdated?: any;
  id?: number;
  accessTokens?: Array<any>;
  companies?: Array<Company>;
}

export class Client implements ClientInterface {
  phone: string;
  phoneVerified: any;
  realm: string;
  username: string;
  password: string;
  challenges: any;
  email: string;
  emailVerified: boolean;
  verificationToken: string;
  status: string;
  created: any;
  lastUpdated: any;
  id: number;
  accessTokens: Array<any>;
  companies: Array<Company>;
  constructor(instance?: Client) {
    Object.assign(this, instance);
  }
}
