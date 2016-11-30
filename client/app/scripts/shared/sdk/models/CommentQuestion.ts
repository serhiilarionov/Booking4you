/* tslint:disable */
import {
  Comment,
  Question
} from '../index';

export interface CommentQuestionInterface {
  id?: number;
  rating: number;
  createdAt?: any;
  commentId?: number;
  questionId?: number;
  comment?: Comment;
  question?: Question;
}

export class CommentQuestion implements CommentQuestionInterface {
  id: number;
  rating: number;
  createdAt: any;
  commentId: number;
  questionId: number;
  comment: Comment;
  question: Question;
  constructor(instance?: CommentQuestion) {
    Object.assign(this, instance);
  }
}
