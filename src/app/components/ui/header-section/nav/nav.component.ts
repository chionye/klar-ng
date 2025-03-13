import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavProp } from '../../../../interface/types';
import { NavItems } from '../../../../content';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        query(
          '.nav-item',
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
export class NavComponent {
  @Input() navs: NavProp[] = NavItems;
  @Input() isOpen: boolean = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
