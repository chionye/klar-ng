import { Component, Input } from '@angular/core';
import { ContactProp } from '../../../../interface/types';
import { Contact } from '../../../../content';
import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-contact-bar',
  imports: [NgFor, NgOptimizedImage, NgClass],
  templateUrl: './contact-bar.component.html',
  styleUrl: './contact-bar.component.css',
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        query(
          '.contact-item',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
              animate(
                '500ms ease-in-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in-out',
          style({ opacity: 0, transform: 'translateY(20px)' })
        ),
      ]),
    ]),
  ],
})
export class ContactBarComponent {
  @Input() contacts: ContactProp[] = Contact;
}
