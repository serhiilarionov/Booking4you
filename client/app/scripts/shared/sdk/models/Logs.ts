/* tslint:disable */

export interface LogsInterface {
  id?: number;
  userId?: number;
  loggableType?: string;
  loggableId?: string;
  method?: string;
  before?: any;
  after?: any;
  date: any;
}

export class Logs implements LogsInterface {
  id: number;
  userId: number;
  loggableType: string;
  loggableId: string;
  method: string;
  before: any;
  after: any;
  date: any;
  constructor(instance?: Logs) {
    Object.assign(this, instance);
  }
}
