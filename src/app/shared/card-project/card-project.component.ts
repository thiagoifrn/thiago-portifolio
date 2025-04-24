import { Component, Input } from '@angular/core';
import { LucideIconsModule } from '../modules/lucide-icons.module';

@Component({
  selector: 'card-project',
  imports: [LucideIconsModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  @Input() title!: string;
  @Input() tags: string[] = [];
  @Input() description!: string;
  @Input() link!: string;
}
