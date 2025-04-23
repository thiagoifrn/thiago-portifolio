import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-primary',
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
})
export class ButtonPrimaryComponent {
  @Input() text: string = '';
  @Input() onClick?: () => void;

  handleClick() {
    if (this.onClick) this.onClick();
  }
}
