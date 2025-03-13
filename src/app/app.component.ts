import { Component } from '@angular/core';
import { HeaderComponent } from './components/ui/header-section/header/header.component';
import { HeroComponent } from './components/ui/hero-section/hero/hero.component';
import { AboutComponent } from './components/ui/about-section/about/about.component';
import { ServicesComponent } from './components/ui/services-section/services/services.component';
import { WhyUsComponent } from './components/ui/why-us-section/why-us/why-us.component';
import { ProjectsComponent } from './components/ui/projects/projects.component';
import { GalleryComponent } from './components/ui/gallery/gallery.component';
import { FooterComponent } from './components/ui/footer-section/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyUsComponent,
    ProjectsComponent,
    GalleryComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'klar';
}
