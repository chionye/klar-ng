import { Component } from '@angular/core';
import { TitleComponent } from '../../../elements/title/title.component';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-services',
  imports: [TitleComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
