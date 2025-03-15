import { Component } from '@angular/core';
import { FooterNav } from '../../../../content';
import { NavProp } from '../../../../interface/types';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-footer-nav',
  imports: [NgFor, NgClass],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.css',
})
export class FooterNavComponent {
  navs: NavProp[] = FooterNav;
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
