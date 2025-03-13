import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../../elements/title/title.component';
import { ButtonComponent } from '../../../elements/button/button.component';
import { Contacts } from '../../../../enum/contacts';
import { ReasonComponent } from '../reason/reason.component';
import { PartnerComponent } from '../partner/partner.component';

@Component({
  selector: 'app-why-us',
  imports: [
    NgStyle,
    TitleComponent,
    ButtonComponent,
    ReasonComponent,
    PartnerComponent,
  ],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css',
})
export class WhyUsComponent {
  @Input() email: string = Contacts.email;
}
