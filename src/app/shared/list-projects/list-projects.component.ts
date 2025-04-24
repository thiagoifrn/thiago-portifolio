import { Component } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { PROJECTS } from '../constants/mock-cards';

@Component({
  selector: 'list-projects',
  imports: [CardProjectComponent],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss',
})
export class ListProjectsComponent {
  projects = PROJECTS;
}
