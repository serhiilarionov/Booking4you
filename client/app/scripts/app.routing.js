"use strict";
var router_1 = require('@angular/router');
var home_page_component_1 = require('./pages/home/home-page.component');
var login_page_component_1 = require('./pages/login/login-page.component');
var registration_page_component_1 = require('./pages/registration/registration-page.component');
var routes = [
    {
        path: '',
        component: home_page_component_1.HomePageComponent
    },
    {
        path: 'login',
        component: login_page_component_1.LoginPageComponent
    },
    {
        path: 'registration',
        component: registration_page_component_1.RegistrationPageComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map