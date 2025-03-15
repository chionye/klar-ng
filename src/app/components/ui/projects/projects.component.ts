import { Component } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { Sliders } from '../../../content';
import { ProjectsProps } from '../../../interface/types';
import { NgFor, NgIf } from '@angular/common';
import {
  CarouselModule,
  OwlOptions,
  SlidesOutputData,
} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent, NgFor, CarouselModule, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  sliders: ProjectsProps[] = Sliders;
  activeSlides?: SlidesOutputData;
  slidesStore?: any[];
  showMore: boolean = false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    items: 1,
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
