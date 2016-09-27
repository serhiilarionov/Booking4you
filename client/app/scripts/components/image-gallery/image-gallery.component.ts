import { Component, ViewEncapsulation, OnChanges, SimpleChanges, ElementRef, Input,
  trigger, state, style, transition, animate} from '@angular/core';
declare var $: any;

class Image {
  constructor(
    public src: string,
    public state: string = 'inactive'
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

// TODO: implement "More+" button according to design
@Component({
  selector: 'image-gallery',
  templateUrl: 'scripts/components/image-gallery/image-gallery.component.html',
  styleUrls: ['scripts/components/image-gallery/image-gallery.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('imageState', [
      state('active', style({opacity: '1'})),
      state('inactive', style({opacity: '0'})),
      transition('active => inactive', animate(300)),
      transition('inactive => active', animate(300))
    ])
  ]
})

export class ImageGalleryComponent implements OnChanges {
  public srcArray: Array<string> = images;
  public activeImages: Array<Image> = [];
  public activeImageIndex: number = 0;
  public $container: any;
  public containerHeight: number;
  @Input() public fixedHeight: boolean = false;
  @Input() public showThumbs: boolean = false;
  constructor(private elementRef: ElementRef) {
    this.createImages();
  }

  ngOnInit() {
    this.$container = $(this.elementRef.nativeElement).find('.gallery-container');
  }

  createImages() {
    this.activeImages = this.srcArray.map((src) => new Image(src, 'inactive'));
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

    this.activeImages[this.activeImageIndex].state = 'inactive';

    this.activeImageIndex = (typeof action === 'number') ? action :
      (action === 'PREV_IMAGE') ? --this.activeImageIndex : ++this.activeImageIndex;

    this.activeImages[this.activeImageIndex].state = 'active';
  }

  setContainerHeight(height) {
    if (this.fixedHeight) { return; }

    this.containerHeight = height;
  }
}
