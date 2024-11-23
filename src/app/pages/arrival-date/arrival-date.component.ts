import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PageComponent } from "../../core/components/page/page.component";
import { RegistrationService } from '../../core/services/registration.service';
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-arrival-date',
  imports: [PageComponent, TextButtonComponent, FormsModule],
  templateUrl: './arrival-date.component.html',
  styleUrl: './arrival-date.component.scss'
})
export class ArrivalDateComponent {

  title = 'When did the product arrive at your home?';
  subheader = 'Either from an online purchase or an in-store visit';
  date: string;

  registrationService = inject(RegistrationService);
  router = inject(Router);

  continueClicked() {
    this.registrationService.regData.date = this.date;
    this.router.navigateByUrl('service-plan');
  }

}
