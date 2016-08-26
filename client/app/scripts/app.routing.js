"use strict";
var router_1 = require('@angular/router');
var Pages = require('./pages');
var routes = [
    {
        path: '',
        component: Pages.HomePageComponent
    },
    {
        path: 'login',
        component: Pages.LoginPageComponent
    },
    {
        path: 'registration',
        component: Pages.RegistrationPageComponent
    },
    {
        path: 'company-list',
        component: Pages.CompanyListPageComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map