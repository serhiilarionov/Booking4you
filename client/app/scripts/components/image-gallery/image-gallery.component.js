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
        if (state === void 0) { state = 'inactive'; }
        this.src = src;
        this.state = state;
    }
    return Image;
}());
// TODO: implement "More+" button according to design
var ImageGalleryComponent = (function () {
    function ImageGalleryComponent(elementRef) {
        this.elementRef = elementRef;
        this.activeImages = [];
        this.activeImageIndex = 0;
        this.srcArray = [];
        this.fixedHeight = false;
        this.showThumbs = false;
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        this.$container = $(this.elementRef.nativeElement).find('.gallery-container');
    };
    ImageGalleryComponent.prototype.createImages = function () {
        if (this.srcArray.length === 0) {
            this.activeImages = [];
            return;
        }
        this.activeImageIndex = 0;
        this.activeImages = this.srcArray.map(function (src) { return new Image(src, 'inactive'); });
        this.activeImages[this.activeImageIndex].state = 'active';
    };
    ImageGalleryComponent.prototype.ngOnChanges = function (changes) {
        if ('srcArray' in changes && changes['srcArray'].currentValue) {
            this.createImages();
        }
    };
    ImageGalleryComponent.prototype.toggleActiveImage = function (action) {
        // not to allow PREV_IMAGE and NEXT_IMAGE actions on first and last images, respectively
        if ((action === 'PREV_IMAGE' && this.activeImageIndex === 0) ||
            (action === 'NEXT_IMAGE' && this.activeImageIndex === (this.srcArray.length - 1))) {
            return;
        }
        this.activeImages[this.activeImageIndex].state = 'inactive';
        this.activeImageIndex = (typeof action === 'number') ? action :
            (action === 'PREV_IMAGE') ? --this.activeImageIndex : ++this.activeImageIndex;
        this.activeImages[this.activeImageIndex].state = 'active';
    };
    ImageGalleryComponent.prototype.setContainerHeight = function (height) {
        if (this.fixedHeight) {
            return;
        }
        this.containerHeight = height;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ImageGalleryComponent.prototype, "srcArray", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ImageGalleryComponent.prototype, "fixedHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ImageGalleryComponent.prototype, "showThumbs", void 0);
    ImageGalleryComponent = __decorate([
        core_1.Component({
            selector: 'image-gallery',
            templateUrl: 'scripts/components/image-gallery/image-gallery.component.html',
            styleUrls: ['scripts/components/image-gallery/image-gallery.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                core_1.trigger('imageState', [
                    core_1.state('active', core_1.style({ opacity: '1' })),
                    core_1.state('inactive', core_1.style({ opacity: '0' })),
                    core_1.transition('active => inactive', core_1.animate(300)),
                    core_1.transition('inactive => active', core_1.animate(300))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());
exports.ImageGalleryComponent = ImageGalleryComponent;
//# sourceMappingURL=image-gallery.component.js.map