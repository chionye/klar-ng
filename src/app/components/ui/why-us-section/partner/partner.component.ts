import { Component, Input } from '@angular/core';
import { PartnersProps } from '../../../../interface/types';
import { Partners } from '../../../../content';
import { NgFor } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TooltipModule } from '@coreui/angular';

@Component({
  selector: 'app-partner',
  imports: [NgFor, CarouselModule, TooltipModule],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css',
})
export class PartnerComponent {
  partners: PartnersProps[] = Partners;
  customOptions: OwlOptions = {
    loop: true,
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
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
}
