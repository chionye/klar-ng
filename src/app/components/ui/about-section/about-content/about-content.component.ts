import { Component } from '@angular/core';
import { About } from '../../../../content';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-content',
  imports: [NgFor],
  templateUrl: './about-content.component.html',
  styleUrl: './about-content.component.css',
})
export class AboutContentComponent {
  text: string[] = About;
}
