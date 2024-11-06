import { Component } from '@angular/core';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'app-navigation-container',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './navigation.container.html',
})
export class NavigationContainer {

}
