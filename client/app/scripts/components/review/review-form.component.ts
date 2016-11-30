import { Component, ViewEncapsulation, Input } from '@angular/core';
import {
  Client,
  ClientApi,
  Question,
  QuestionApi,
  CommentApi,
  CommentInterface,
  Comment,
  CommentQuestionApi,
  BookingApi
} from '../../shared/index';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

interface RatingValue {
  rating: number;
  questionId: number;
  commentId?: number;
}

@Component({
  selector: 'review-form',
  templateUrl: 'scripts/components/review/review-form.component.html',
  styleUrls: ['scripts/components/review/review-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ReviewFormComponent {
  @Input() bookingId: number;
  @Input() companyId: number;
  public reviewForm: FormGroup;
  public questionList: Array<Question>;
  public ratingsByCriteria: Array<RatingValue> = [];
  public currentUser: Client;
  public submitted: boolean = false;
  public success: boolean = false;
  public preview: CommentInterface;
  private data: CommentInterface;

  constructor(private clientApi: ClientApi,
              public formBuilder: FormBuilder,
              public questionApi: QuestionApi,
              public commentApi: CommentApi,
              public commentQuestionApi: CommentQuestionApi,
              public bookingApi: BookingApi) {

    this.currentUser = this.clientApi.getCachedCurrent();

    this.reviewForm = this.formBuilder.group({
      positiveMessage: [''],
      negativeMessage: [''],
      rating: ['', Validators.required],
      displayName: [this.currentUser.username]
    });

    this.questionApi.find().subscribe((questions) => {
      this.questionList = questions;
      this.questionList.forEach((question) => {
        let controlName: string = `ratingCriteria_${question.id}`;
        let controlFormControl: FormControl = new FormControl();

        controlFormControl.valueChanges.subscribe((ratingValue) => {
          let ratingValueByCriteria: RatingValue = this.ratingsByCriteria.find((instance) => {
            return instance['questionId'] === question.id;
          });

          if (!ratingValueByCriteria) {
            this.ratingsByCriteria.push({questionId: question.id, rating: ratingValue});
          } else {
            ratingValueByCriteria.rating = ratingValue;
          }

          this.calcRatingAverage();
        });

        this.reviewForm.addControl(controlName, controlFormControl);
      });
    });
  }

  calcRatingAverage() {
    let sumRating: number = this.ratingsByCriteria.reduce((prev, next) => {
      return prev + next.rating;
    }, 0);

    let averageRating: number = (sumRating / this.ratingsByCriteria.length);

    if (averageRating % 1 !== 0) {
      averageRating = parseFloat(averageRating.toFixed(1));
    }

    this.reviewForm.controls['rating'].setValue(averageRating);
  }

  onSubmit() {
    this.data = {
      positiveMessage: this.reviewForm.controls['positiveMessage'].value,
      negativeMessage: this.reviewForm.controls['negativeMessage'].value,
      rating: this.reviewForm.controls['rating'].value,
      displayName: this.reviewForm.controls['displayName'].value || 'Anonymous',
      bookingId: this.bookingId,
      clientId: this.currentUser.id,
      companyId: this.companyId
    };

    this.reviewForm.invalid ? this.submitted = true : this.submitted = false;

    if (this.reviewForm.valid && !this.success) {
      this.commentApi.create(this.data).subscribe((comment: Comment) => {
        this.bookingApi.upsert({id: this.bookingId, commented: true}).subscribe(() => {
          if (this.ratingsByCriteria.length) {
            this.ratingsByCriteria = this.ratingsByCriteria.map((instance) => {
              instance.commentId = comment.id;
              return instance;
            });
            this.commentQuestionApi.create(this.ratingsByCriteria).subscribe();
          }
          this.success = true;
        });
      });

    }
  }
}
