import { Component, Input, HostListener } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';

@Component({
  selector: 'app-header',
  imports: [NavComponent, NgOptimizedImage, RouterLink, ContactBarComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() logo: string = 'images/logo.png';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
