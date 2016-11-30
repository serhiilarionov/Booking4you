/* tslint:disable */

export interface QuestionInterface {
  id?: number;
  name: string;
}

export class Question implements QuestionInterface {
  id: number;
  name: string;
  constructor(instance?: Question) {
    Object.assign(this, instance);
  }
}
