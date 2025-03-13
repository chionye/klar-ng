import { NgFor, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GalleryImages } from '../../../content';
import {
  CarouselModule,
  OwlOptions,
  SlidesOutputData,
} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  imports: [NgFor, CarouselModule, NgStyle],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  @Input() activeIndex: number = 0;
  @Input() images = GalleryImages;
  @Input() activeSlides?: SlidesOutputData;
  @Input() slidesStore?: any[];
  @Input() showMore: boolean = false;
  @Input() customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2, // Show 3 items with center effect
      },
    },
    nav: false,
  };

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
