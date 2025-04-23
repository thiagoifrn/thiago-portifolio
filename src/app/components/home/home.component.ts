import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonPrimaryComponent } from "../../shared/button-primary/button-primary.component";
import { ImageHeaderComponent } from "../image-header/image-header.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ButtonPrimaryComponent, ImageHeaderComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
