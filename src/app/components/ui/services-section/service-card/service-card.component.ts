import { NgFor, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesProps } from '../../../../interface/types';
import { Services } from '../../../../content';

@Component({
  selector: 'app-service-card',
  imports: [NgOptimizedImage, NgFor, NgStyle],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  services: ServicesProps[] = Services;
}
