import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterTagLine, NeedHelpText } from '../../../../content';
import { Contacts } from '../../../../enum/contacts';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

@Component({
  selector: 'app-footer',
  imports: [NgStyle, NgOptimizedImage, FooterNavComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() footerTagLine: string = FooterTagLine;
  @Input() needHelpText: string = NeedHelpText;
  @Input() phone: string = Contacts.phone;
  @Input() address: string = Contacts.address;
  @Input() year: number = new Date().getFullYear();
}
