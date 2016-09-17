"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var sidebar_service_1 = require('./sidebar.service');
var auth_guard_service_1 = require('./auth-guard.service');
var broadcast_service_1 = require('./broadcast.service');
var auth_redirect_service_1 = require('./auth-redirect.service');
var infobox_loader_service_1 = require('./infobox-loader.service');
var sidebar_service_2 = require('./sidebar.service');
exports.SidebarService = sidebar_service_2.SidebarService;
var auth_guard_service_2 = require('./auth-guard.service');
exports.AuthGuardService = auth_guard_service_2.AuthGuardService;
var broadcast_service_2 = require('./broadcast.service');
exports.Broadcaster = broadcast_service_2.Broadcaster;
var auth_redirect_service_2 = require('./auth-redirect.service');
exports.AuthRedirectService = auth_redirect_service_2.AuthRedirectService;
var infobox_loader_service_2 = require('./infobox-loader.service');
exports.InfoboxLoader = infobox_loader_service_2.InfoboxLoader;
__export(require('./constants'));
exports.Services = [
    sidebar_service_1.SidebarService,
    auth_guard_service_1.AuthGuardService,
    broadcast_service_1.Broadcaster,
    auth_redirect_service_1.AuthRedirectService,
    infobox_loader_service_1.InfoboxLoader
];
//# sourceMappingURL=index.js.map