import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';

@Component({
  selector: 'app-header',
  imports: [ButtonPrimaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  contatoClick() {
    const menssage = encodeURIComponent(
      'Olá, gostaria de entrar em contato contigo!'
    );
    window.open(`https://wa.me/5584988981921?text${menssage}`, '_blank');
  }
}
