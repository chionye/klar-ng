import { Component, Input } from '@angular/core';
import { CardProps } from '../../../../interface/types';
import { Cards } from '../../../../content';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [NgFor, NgClass],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() cards: CardProps[] = Cards;
}
