import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

export const entryGuard: CanActivateFn = (route, state) => {
  const registrationService = inject(RegistrationService);
  const router = inject(Router);
  console.log(route);
  console.log(state);
  if (registrationService?.regData?.applianceType) {
    return true;
  } else {
    router.navigateByUrl('appliance-type');
    return false;
  }
};
