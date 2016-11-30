import { Component, Input } from '@angular/core';
import { Comment } from '../../shared/index';

@Component({
  selector: 'review',
  templateUrl: 'scripts/components/review/review.component.html',
  styleUrls: ['scripts/components/review/review.component.css']
})

export class ReviewComponent {
  @Input() review: Comment;
}
