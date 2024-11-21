import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationComponent } from './navigation.component';

@Component({
    selector: 'app-navigation-container',
    imports: [NavigationComponent],
    templateUrl: './navigation.container.html'
})

export class NavigationContainer {

    constructor() {
        let route = inject(ActivatedRoute);
        let router = inject(Router);
        route.queryParamMap.subscribe(x => {
            let model = x.get('model');
            let serial = x.get('serial');
            let client = x.get('client');

            if (model && serial && client) {
                router.navigate(['/registration-code-with-params'], {
                    queryParamsHandling: "preserve"
                })
            }
        })
    }

}
