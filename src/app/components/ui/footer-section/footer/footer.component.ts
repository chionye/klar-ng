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
  footerTagLine: string = FooterTagLine;
  needHelpText: string = NeedHelpText;
  phone: string = Contacts.phone;
  address: string = Contacts.address;
  year: number = new Date().getFullYear();
}
