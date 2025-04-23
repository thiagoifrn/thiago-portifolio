import { Component } from '@angular/core';
import { GmailComponent } from '../icons/gmail/gmail.component';
import { LinkedinComponent } from '../icons/linkedin/linkedin.component';
import { GithubComponent } from '../icons/github/github.component';

@Component({
  selector: 'social-media',
  imports: [GmailComponent, LinkedinComponent, GithubComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class FooterComponent {}
