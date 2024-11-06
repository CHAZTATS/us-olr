import { Routes } from '@angular/router';
import { NavigationContainer } from './core/components/navigation/navigation.container';
import { ApplianceTypeContainer } from './pages/appliance-type/appliance-type.container';
import { ApplianceContainer } from './pages/appliance/appliance.container';
import { ArrivalDateContainer } from './pages/arrival-date/arrival-date.container';
import { CostContainer } from './pages/cost/cost.container';
import { HaveRegistrationCodeContainer } from './pages/have-registration-code/have-registration-code.container';
import { ModelSerialNumberContainer } from './pages/model-serial-number/model-serial-number.container';
import { PersonalDetailsContainer } from './pages/personal-details/personal-details.container';
import { PlanningPurchaseContainer } from './pages/planning-purchase/planning-purchase.container';
import { RegistrationCodeContainer } from './pages/registration-code/registration-code.container';
import { ServicePlanContainer } from './pages/service-plan/service-plan.container';

export const routes: Routes = [
    {
        path: '',
        component: NavigationContainer,
        children: [
            {
                path: '',
                redirectTo: 'appliance-type',
                pathMatch: 'full',
            },
            {
                path: 'appliance-type',
                component: ApplianceTypeContainer
            },
            {
                path: 'appliance',
                component: ApplianceContainer
            },
            {
                path: 'have-registration-code',
                component: HaveRegistrationCodeContainer
            },
            {
                path: 'registration-code',
                component: RegistrationCodeContainer
            },
            {
                path: 'model-serial-number',
                component: ModelSerialNumberContainer
            },
            {
                path: 'cost',
                component: CostContainer
            },
            {
                path: 'arrival-date',
                component: ArrivalDateContainer
            },
            {
                path: 'service-plan',
                component: ServicePlanContainer
            },
            {
                path: 'planning-purchase',
                component: PlanningPurchaseContainer
            },
            {
                path: 'personal-details',
                component: PersonalDetailsContainer
            }
        ]
    }
];
