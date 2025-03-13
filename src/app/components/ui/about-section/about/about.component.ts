import { Component } from '@angular/core';
import { AboutContentComponent } from '../about-content/about-content.component';
import { NgStyle } from '@angular/common';
import { TitleComponent } from '../../../elements/title/title.component';

@Component({
  selector: 'app-about',
  imports: [AboutContentComponent, NgStyle, TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
