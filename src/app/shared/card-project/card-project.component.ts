import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-project',
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  @Input() title!: string;
  @Input() tags: string[] = [];
  @Input() description!: string;
}
