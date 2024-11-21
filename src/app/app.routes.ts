import { Routes } from '@angular/router';
import { brand } from '../../config/brand/brand';
import { NavigationContainer } from './core/components/navigation/navigation.container';
import { entryGuard } from './core/guards/entry.guard';
import { ApplianceTypeContainer } from './pages/appliance-type/appliance-type.container';
import { ApplianceContainer } from './pages/appliance/appliance.container';
import { ArrivalDateContainer } from './pages/arrival-date/arrival-date.container';
import { CostContainer } from './pages/cost/cost.container';
import { HaveRegistrationCodeContainer } from './pages/have-registration-code/have-registration-code.container';
import { ModelSerialNumberContainer } from './pages/model-serial-number/model-serial-number.container';
import { PersonalDetailsContainer } from './pages/personal-details/personal-details.container';
import { PlanningPurchaseContainer } from './pages/planning-purchase/planning-purchase.container';
import { ProtectionDetailsContainer } from './pages/protection-details/protection-details.container';
import { RegistrationCode2Component } from './pages/registration-code-2/registration-code-2.component';
import { RegistrationCodeWithParamsComponent } from './pages/registration-code-with-params/registration-code-with-params.component';
import { ServicePlanContainer } from './pages/service-plan/service-plan.container';

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
                component: ApplianceTypeContainer,
            },
            {
                path: 'appliance',
                component: ApplianceContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'have-registration-code',
                component: HaveRegistrationCodeContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'registration-code',
                component: RegistrationCode2Component,
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
                component: CostContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'arrival-date',
                component: ArrivalDateContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'service-plan',
                component: ServicePlanContainer,
                canActivate: [entryGuard]
            },
            {
                path: 'planning-purchase',
                component: PlanningPurchaseContainer,
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
