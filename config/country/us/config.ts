
export const config = {
    pageConfigs: [
        {
            route: 'appliance-type',
            routeOptions: [
                {
                    option: 1,
                    route: 'appliance'
                }
            ]
        },
        {
            route: 'appliance',
            routeOptions: [
                {
                    option: 1,
                    route: 'appliance'
                }
            ]
        },
    ] as PageConfig[]
};

interface PageConfig {
    route: string;
    routeOptions: RouteOption[];
}

interface RouteOption {
    name?: string;
    option: number;
    route: string;
}