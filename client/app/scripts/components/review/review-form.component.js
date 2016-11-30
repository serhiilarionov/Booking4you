"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('../../shared/index');
var forms_1 = require('@angular/forms');
var ReviewFormComponent = (function () {
    function ReviewFormComponent(clientApi, formBuilder, questionApi, commentApi, commentQuestionApi, bookingApi) {
        var _this = this;
        this.clientApi = clientApi;
        this.formBuilder = formBuilder;
        this.questionApi = questionApi;
        this.commentApi = commentApi;
        this.commentQuestionApi = commentQuestionApi;
        this.bookingApi = bookingApi;
        this.ratingsByCriteria = [];
        this.submitted = false;
        this.success = false;
        this.currentUser = this.clientApi.getCachedCurrent();
        this.reviewForm = this.formBuilder.group({
            positiveMessage: [''],
            negativeMessage: [''],
            rating: ['', forms_1.Validators.required],
            displayName: [this.currentUser.username]
        });
        this.questionApi.find().subscribe(function (questions) {
            _this.questionList = questions;
            _this.questionList.forEach(function (question) {
                var controlName = "ratingCriteria_" + question.id;
                var controlFormControl = new forms_1.FormControl();
                controlFormControl.valueChanges.subscribe(function (ratingValue) {
                    var ratingValueByCriteria = _this.ratingsByCriteria.find(function (instance) {
                        return instance['questionId'] === question.id;
                    });
                    if (!ratingValueByCriteria) {
                        _this.ratingsByCriteria.push({ questionId: question.id, rating: ratingValue });
                    }
                    else {
                        ratingValueByCriteria.rating = ratingValue;
                    }
                    _this.calcRatingAverage();
                });
                _this.reviewForm.addControl(controlName, controlFormControl);
            });
        });
    }
    ReviewFormComponent.prototype.calcRatingAverage = function () {
        var sumRating = this.ratingsByCriteria.reduce(function (prev, next) {
            return prev + next.rating;
        }, 0);
        var averageRating = (sumRating / this.ratingsByCriteria.length);
        if (averageRating % 1 !== 0) {
            averageRating = parseFloat(averageRating.toFixed(1));
        }
        this.reviewForm.controls['rating'].setValue(averageRating);
    };
    ReviewFormComponent.prototype.onSubmit = function () {
        var _this = this;
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
            this.commentApi.create(this.data).subscribe(function (comment) {
                _this.bookingApi.upsert({ id: _this.bookingId, commented: true }).subscribe(function () {
                    if (_this.ratingsByCriteria.length) {
                        _this.ratingsByCriteria = _this.ratingsByCriteria.map(function (instance) {
                            instance.commentId = comment.id;
                            return instance;
                        });
                        _this.commentQuestionApi.create(_this.ratingsByCriteria).subscribe();
                    }
                    _this.success = true;
                });
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReviewFormComponent.prototype, "bookingId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReviewFormComponent.prototype, "companyId", void 0);
    ReviewFormComponent = __decorate([
        core_1.Component({
            selector: 'review-form',
            templateUrl: 'scripts/components/review/review-form.component.html',
            styleUrls: ['scripts/components/review/review-form.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.ClientApi, forms_1.FormBuilder, index_1.QuestionApi, index_1.CommentApi, index_1.CommentQuestionApi, index_1.BookingApi])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());
exports.ReviewFormComponent = ReviewFormComponent;
//# sourceMappingURL=review-form.component.js.map