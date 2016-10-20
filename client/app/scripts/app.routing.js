"use strict";
var router_1 = require('@angular/router');
var Pages = require('./pages/index');
var index_1 = require('./shared/index');
var routes = [
    {
        path: '',
        component: Pages.HomePageComponent
    },
    {
        path: 'login',
        component: Pages.LoginPageComponent,
        canActivate: [index_1.AuthGuardService]
    },
    {
        path: 'registration',
        component: Pages.RegistrationPageComponent,
        canActivate: [index_1.AuthGuardService]
    },
    {
        path: 'profile',
        component: Pages.ProfilePageComponent,
        canActivate: [index_1.AuthGuardService],
        children: [
            {
                path: '',
                component: Pages.ProfileMainComponent
            },
            {
                path: 'favorites',
                component: Pages.ProfileFavoritesComponent
            },
            {
                path: 'orders',
                component: Pages.ProfileMyOrdersComponent
            }
        ]
    },
    {
        path: 'company-list',
        component: Pages.CompanyListPageComponent
    },
    {
        path: 'company-details/:id',
        component: Pages.CompanyDetailsPageComponent
    },
    {
        path: 'comming-soon',
        component: Pages.CommingSoonPageComponent
    },
    {
        path: '**',
        redirectTo: 'comming-soon'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map