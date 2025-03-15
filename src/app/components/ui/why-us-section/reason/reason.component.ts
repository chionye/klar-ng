import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ServicesProps } from '../../../../interface/types';
import { Reasons } from '../../../../content';

@Component({
  selector: 'app-reason',
  imports: [NgFor],
  templateUrl: './reason.component.html',
  styleUrl: './reason.component.css',
})
export class ReasonComponent {
  reasons: ServicesProps[] = Reasons;
}
