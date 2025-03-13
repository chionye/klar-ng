import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../elements/button/button.component';
import { Contacts } from '../../../../enum/contacts';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, CardsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input() email: string = Contacts.email;
}
