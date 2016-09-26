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
var Image = (function () {
    function Image(src, state) {
        if (state === void 0) { state = 'active'; }
        this.src = src;
        this.state = state;
    }
    return Image;
}());
// TODO: get images srcArray from parent component
var images = [
    'http://placehold.it/500x350?text=Photo 1',
    'http://placehold.it/600x350?text=Photo 2',
    'http://placehold.it/700x600?text=Photo 3',
    'http://placehold.it/950x500?text=Photo 4',
    'http://placehold.it/500x800?text=Photo 5',
    'http://placehold.it/750x800?text=Photo 6',
    'http://placehold.it/300x500?text=Photo 7',
];
var ImageGalleryComponent = (function () {
    function ImageGalleryComponent(elementRef) {
        this.elementRef = elementRef;
        this.srcArray = images;
        this.activeImages = [];
        this.activeImageIndex = 0;
        this.createImages();
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        this.$container = $(this.elementRef.nativeElement).find('.gallery-container');
    };
    ImageGalleryComponent.prototype.createImages = function () {
        this.activeImages = this.srcArray.map(function (src) { return new Image(src, 'right'); });
        this.activeImages[this.activeImageIndex].state = 'active';
    };
    ImageGalleryComponent.prototype.ngOnChanges = function (changes) {
        if (!('srcArray' in changes) || !changes['srcArray'].currentValue) {
            return;
        }
        this.createImages();
    };
    ImageGalleryComponent.prototype.toggleActiveImage = function (action) {
        // not to allow PREV_IMAGE and NEXT_IMAGE actions on first and last images, respectively
        if ((action === 'PREV_IMAGE' && this.activeImageIndex === 0) ||
            (action === 'NEXT_IMAGE' && this.activeImageIndex === (this.srcArray.length - 1))) {
            return;
        }
        switch (action) {
            case 'PREV_IMAGE':
                this.activeImages[this.activeImageIndex].state = 'right';
                --this.activeImageIndex;
                this.activeImages[this.activeImageIndex].state = 'left';
                this.activeImages[this.activeImageIndex].state = 'active';
                break;
            case 'NEXT_IMAGE':
                this.activeImages[this.activeImageIndex].state = 'left';
                ++this.activeImageIndex;
                this.activeImages[this.activeImageIndex].state = 'right';
                this.activeImages[this.activeImageIndex].state = 'active';
                break;
            default: return;
        }
    };
    ImageGalleryComponent = __decorate([
        core_1.Component({
            selector: 'image-gallery',
            templateUrl: 'scripts/components/image-gallery/image-gallery.component.html',
            styleUrls: ['scripts/components/image-gallery/image-gallery.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                core_1.trigger('imageState', [
                    core_1.state('active', core_1.style({ transform: 'translateX(0)' })),
                    core_1.state('right', core_1.style({ transform: 'translateX(100%)' })),
                    core_1.state('left', core_1.style({ transform: 'translateX(-100%)' })),
                    core_1.transition('active => right', core_1.animate(300)),
                    core_1.transition('active => left', core_1.animate(300)),
                    core_1.transition('left => active', core_1.animate(300)),
                    core_1.transition('right => active', core_1.animate(300))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());
exports.ImageGalleryComponent = ImageGalleryComponent;
//# sourceMappingURL=image-gallery.component.js.map