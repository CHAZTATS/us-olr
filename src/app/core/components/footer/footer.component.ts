import { Component } from '@angular/core';
import { brand } from '../../../../../config/country/us/brand/brand';
import { environment } from '../../../../../config/environment/environment';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  env = environment.name;
  brand = brand.name;

}
