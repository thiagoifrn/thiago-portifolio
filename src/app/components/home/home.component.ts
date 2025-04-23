import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ButtonPrimaryComponent } from '../../shared/button-primary/button-primary.component';
import { ImageHeaderComponent } from '../image-header/image-header.component';
import { AboutComponent } from '../about/about.component';
import { SocialMediaComponent } from '../../shared/social-media/social-media.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    ButtonPrimaryComponent,
    ImageHeaderComponent,
    AboutComponent,
    SocialMediaComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  baixarPDF() {
    const link = document.createElement('a');
    link.href = '/assets/Curriculo_Thiago_Pereira_De_Souza.pdf';
    link.download = 'Curriculo_Thiago_Pereira_De_Souza.pdf';
    link.click();
  }

  redirectGithub() {
    window.open('https://github.com/thiagoifrn?tab=repositories', '_blank');
  }
}
