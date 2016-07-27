"use strict";
var router_1 = require('@angular/router');
var home_page_component_1 = require('./pages/home/home-page.component');
var login_page_component_1 = require('./pages/login/login-page.component');
var routes = [
    {
        path: '',
        component: home_page_component_1.HomePageComponent
    },
    {
        path: 'login',
        component: login_page_component_1.LoginPageComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map