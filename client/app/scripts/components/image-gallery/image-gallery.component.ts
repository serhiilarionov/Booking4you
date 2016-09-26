import { Component, ViewEncapsulation, OnChanges, SimpleChanges, ElementRef,
  trigger, state, style, transition, animate} from '@angular/core';
declare var $: any;

class Image {
  constructor(
    public src: string,
    public state: string = 'active'
  ) {}
}

// TODO: get images srcArray from parent component
const images: Array<string> = [
  'http://placehold.it/500x350?text=Photo 1',
  'http://placehold.it/600x350?text=Photo 2',
  'http://placehold.it/700x600?text=Photo 3',
  'http://placehold.it/950x500?text=Photo 4',
  'http://placehold.it/500x800?text=Photo 5',
  'http://placehold.it/750x800?text=Photo 6',
  'http://placehold.it/300x500?text=Photo 7',
];

@Component({
  selector: 'image-gallery',
  templateUrl: 'scripts/components/image-gallery/image-gallery.component.html',
  styleUrls: ['scripts/components/image-gallery/image-gallery.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('imageState', [
      state('active', style({transform: 'translateX(0)'})),
      state('right', style({transform: 'translateX(100%)'})),
      state('left', style({transform: 'translateX(-100%)'})),
      transition('active => right', animate(300)),
      transition('active => left', animate(300)),
      transition('left => active', animate(300)),
      transition('right => active', animate(300))
    ])
  ]
})

export class ImageGalleryComponent implements OnChanges {
  public srcArray: Array<string> = images;
  public activeImages: Array<Image> = [];
  public activeImageIndex: number = 0;
  public $container: any;
  public containerHeight: number;
  constructor(private elementRef: ElementRef) {
    this.createImages();
  }

  ngOnInit() {
    this.$container = $(this.elementRef.nativeElement).find('.gallery-container');
  }

  createImages() {
    this.activeImages = this.srcArray.map((src) => new Image(src, 'right'));
    this.activeImages[this.activeImageIndex].state = 'active';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!('srcArray' in changes) || !changes['srcArray'].currentValue) { return; }

    this.createImages();
  }

  toggleActiveImage(action) {
    // not to allow PREV_IMAGE and NEXT_IMAGE actions on first and last images, respectively
    if (
      (action === 'PREV_IMAGE' && this.activeImageIndex === 0) ||
      (action === 'NEXT_IMAGE' && this.activeImageIndex === (this.srcArray.length - 1))
    ) { return; }

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
  }
}
