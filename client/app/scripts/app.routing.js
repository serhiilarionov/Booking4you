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
        path: 'company-list',
        component: Pages.CompanyListPageComponent,
        canActivate: [index_1.AuthGuardService]
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