import { Routes } from '@angular/router';
import { brand } from '../../config/brand/brand';
import { NavigationContainer } from './core/components/navigation/navigation.container';
import { entryGuard } from './core/guards/entry.guard';
import { ApplianceTypeComponent } from './pages/appliance-type/appliance-type.component';
import { ApplianceComponent } from './pages/appliance/appliance.component';
import { ArrivalDateComponent } from './pages/arrival-date/arrival-date.component';
import { CostComponent } from './pages/cost/cost.component';
import { HaveRegistrationCodeContainer } from './pages/have-registration-code/have-registration-code.container';
import { ModelSerialNumberContainer } from './pages/model-serial-number/model-serial-number.container';
import { PersonalDetailsContainer } from './pages/personal-details/personal-details.container';
import { PlanningPurchaseComponent } from './pages/planning-purchase/planning-purchase.component';
import { ProtectionDetailsContainer } from './pages/protection-details/protection-details.container';
import { RegistrationCodeWithParamsComponent } from './pages/registration-code-with-params/registration-code-with-params.component';
import { RegistrationCodeComponent } from './pages/registration-code/registration-code.component';
import { ServicePlanComponent } from './pages/service-plan/service-plan.component';

export const routes: Routes = [
    {
        path: '',
        component: NavigationContainer,
        title: `${brand.name} - Registration`,
        children: [
            {
                path: '',
                redirectTo: 'appliance-type',
                pathMatch: 'full',
            },
            {
                path: 'appliance-type',
                component: ApplianceTypeComponent,
            },
            {
                path: 'appliance',
                component: ApplianceComponent,
                canActivate: [entryGuard]
            },
            {
                path: 'have-registration-code',
                component: HaveRegistrationCodeContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'registration-code',
                component: RegistrationCodeComponent,
                canActivate: [entryGuard]
            },
            {
                path: 'registration-code-with-params',
                component: RegistrationCodeWithParamsComponent,
                canActivate: [entryGuard]
            },
            {
                path: 'model-serial-number',
                component: ModelSerialNumberContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'cost',
                component: CostComponent,
                canActivate: [entryGuard]
            },
            {
                path: 'arrival-date',
                component: ArrivalDateComponent,
                canActivate: [entryGuard]
            },
            {
                path: 'service-plan',
                component: ServicePlanComponent,
                canActivate: [entryGuard]
            },
            {
                path: 'planning-purchase',
                component: PlanningPurchaseComponent,
                canActivate: [entryGuard]
            },
            {
                path: 'personal-details',
                component: PersonalDetailsContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'protection-details',
                component: ProtectionDetailsContainer,
                canActivate: []
            }
        ]
    }
];
