'use strict';



var appConfig = window.appConfig || {};

appConfig.menu_speed = 200;

appConfig.smartSkin = "smart-style-0";

appConfig.skins = [
    {name: "smart-style-0",
        logo: "styles/img/logo.png",
        class: "btn btn-block btn-xs txt-color-white margin-right-5",
        style: "background-color:#4E463F;",
        label: "Smart Default"},

    {name: "smart-style-1",
        logo: "styles/img/logo-white.png",
        class: "btn btn-block btn-xs txt-color-white",
        style: "background:#3A4558;",
        label: "Dark Elegance"},

    {name: "smart-style-2",
        logo: "styles/img/logo-blue.png",
        class: "btn btn-xs btn-block txt-color-darken margin-top-5",
        style: "background:#fff;",
        label: "Ultra Light"},

    {name: "smart-style-3",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background:#f78c40",
        label: "Google Skin"},

    {name: "smart-style-4",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;",
        label: "PixelSmash"},

    {name: "smart-style-5",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;",
        label: "Glass"},

    {name: "smart-style-6",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #2196F3; border: 1px solid rgba(121, 161, 221, 0.8); color: #FFF !important;",
        beta: true,
        label: "MaterialDesign"
    }


];



appConfig.sound_path = "sound/";
appConfig.sound_on = true; 


/*
* DEBUGGING MODE
* debugState = true; will spit all debuging message inside browser console.
* The colors are best displayed in chrome browser.
*/


appConfig.debugState = false;	
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


appConfig.voice_command = true;
appConfig.voice_command_auto = false;

/*
 *  Sets the language to the default 'en-US'. (supports over 50 languages 
 *  by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  CatalГ            ['ca-ES']
 *  ДЊeЕЎtina         ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  EspaГ±ol          ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'EspaГ±a']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'MГ©xico']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'PanamГЎ']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'PerГє']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'RepГєblica Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  FranГ§ais         ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  ГЌslenska         ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmГҐl     ['nb-NO']
 *  Polski            ['pl-PL']
 *  PortuguГЄs        ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  RomГўnДѓ          ['ro-RO']
 *  SlovenДЌina       ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  TГјrkГ§e          ['tr-TR']
 *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
 *  PСѓСЃСЃРєРёР№     ['ru-RU']
 *  РЎСЂРїСЃРєРё      ['sr-RS']
 *  н•њкµ­м–ґ         ['ko-KR']
 *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
 *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
 *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
 *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
 *  ж—Ґжњ¬иЄћ         ['ja-JP']
 *  Lingua latД«na    ['la']
 */
appConfig.voice_command_lang = 'ru-RU';
/*
 *  Use localstorage to remember on/off (best used with HTML Version)
 */ 
appConfig.voice_localStorage = false;
/*
 * Voice Commands
 * Defines all voice command variables and functions
 */ 
if (appConfig.voice_command) {
        
     	appConfig.commands = {
                
        'show dashboard' : function() { window.location.hash = "dashboard" },
        'show inbox' : function() {  window.location.hash = "inbox/" },
        'show graphs' : function() {  window.location.hash = "graphs/flot" },
        'show flotchart' : function() { window.location.hash = "graphs/flot" },
        'show morris chart' : function() { window.location.hash = "graphs/morris" },
        'show inline chart' : function() { window.location.hash = "graphs/inline-charts" },
        'show dygraphs' : function() { window.location.hash = "graphs/dygraphs" },
        'show tables' : function() { window.location.hash = "tables/table" },
        'show data table' : function() { window.location.hash = "tables/datatable" },
        'show jquery grid' : function() { window.location.hash = "tables/jqgrid" },
        'show form' : function() { window.location.hash = "forms/form-elements" },
        'show form layouts' : function() { window.location.hash = "forms/form-templates" },
        'show form validation' : function() { window.location.hash = "forms/validation" },
        'show form elements' : function() { window.location.hash = "forms/bootstrap-forms" },
        'show form plugins' : function() { window.location.hash = "forms/plugins" },
        'show form wizards' : function() { window.location.hash = "forms/wizards" },
        'show bootstrap editor' : function() { window.location.hash = "forms/other-editors" },
        'show dropzone' : function() { window.location.hash = "forms/dropzone" },
        'show image cropping' : function() { window.location.hash = "forms/image-editor" },
        'show general elements' : function() { window.location.hash = "ui/general-elements" },
        'show buttons' : function() { window.location.hash = "ui/buttons" },
        'show fontawesome' : function() { window.location.hash = "ui/icons/fa" },
        'show glyph icons' : function() { window.location.hash = "ui/icons/glyph" },
        'show flags' : function() { window.location.hash = "ui/icons/flags" },
        'show grid' : function() { window.location.hash = "ui/grid" },
        'show tree view' : function() { window.location.hash = "ui/treeview" },
        'show nestable lists' : function() { window.location.hash = "ui/nestable-list" },
        'show jquery U I' : function() { window.location.hash = "ui/jqui" },
        'show typography' : function() { window.location.hash = "ui/typography" },
        'show calendar' : function() { window.location.hash = "calendar" },
        'show widgets' : function() { window.location.hash = "widgets" },
        'show gallery' : function() { window.location.hash = "gallery" },
        'show maps' : function() { window.location.hash = "gmap-xml" },
        'go back' :  function() { history.back(1); }, 
        'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
        'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
        'hide navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'show navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'mute' : function() {
            appConfig.sound_on = false;
            $.smallBox({
                title : "MUTE",
                content : "All sounds have been muted!",
                color : "#a90329",
                timeout: 4000,
                icon : "fa fa-volume-off"
            });
        },
        'sound on' : function() {
            appConfig.sound_on = true;
            $.speechApp.playConfirmation();
            $.smallBox({
                title : "UNMUTE",
                content : "All sounds have been turned on!",
                color : "#40ac2b",
                sound_file: 'voice_alert',
                timeout: 5000,
                icon : "fa fa-volume-up"
            });
        },
        'stop' : function() {
            smartSpeechRecognition.abort();
            $( ":root" ).removeClass("voice-command-active");
            $.smallBox({
                title : "VOICE COMMAND OFF",
                content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                color : "#40ac2b",
                sound_file: 'voice_off',
                timeout: 8000,
                icon : "fa fa-microphone-slash"
            });
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }
        },
        'help' : function() {

            $('#voiceModal').removeData('modal').modal( { remote: "app/layout/partials/voice-commands.tpl.html", show: true } );
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }

        },      
        'got it' : function() {
            $('#voiceModal').modal('hide');
        },  
        'logout' : function() {
            $.speechApp.stop();
            window.location = $('#logout > span > a').attr("href");
        }
    };
}

appConfig.apiRootUrl = 'api';

window.appConfig = appConfig;

/*
* END APP.appConfig
*/
'use strict';

$.sound_path = appConfig.sound_path;
$.sound_on = appConfig.sound_on;


$(function () {

    // moment.js default language
    moment.locale('ru');

    angular.bootstrap(document, ['app']);
 
});

'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'datatables', 
    'customElements',
    'lbServices',

    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.layout',
    'app.catalog',
    'app.home',
    'app.locations'
])
.config(function ($provide, $httpProvider, RestangularProvider) {


    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
        var errorCounter = 0;
        function notifyError(rejection){
            console.log(rejection);
        }

        return {
            // On request failure
            requestError: function (rejection) {
                // show notification
                notifyError(rejection);

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                // show notification
                notifyError(rejection);
                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

})
.constant('APP_CONFIG', window.appConfig)
.constant('API_VERSION', 1)

.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    console.log('qwe');
    // editableOptions.theme = 'bs3';

});



(function(){
    "use strict";

    angular.module('SmartAdmin', [
        "SmartAdmin.Forms",
        "SmartAdmin.Layout",
        "SmartAdmin.UI",
    ]);
})();
"use strict";


angular.module('app.catalog', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.catalog', {
            abstract: true,
            data: {
                title: 'Catalog'
            }
        })
        .state('app.catalog.categories', {
            url: '/catalog/categories',
            data: {
                title: 'Categories'
            },
            views: {
                "content@app": {
                    controller: 'CategoriesController as categories',
                    templateUrl: "app/catalog/views/categories.html"
                }
            }
        })
      .state('app.catalog.companies', {
          url: '/catalog/companies',
          data: {
              title: 'Companies'
          },
          views: {
              "content@app": {
                  controller: 'CompaniesController as companies',
                  templateUrl: "app/catalog/views/companies.html",
                  resolve: {
                      categories: function (Categories) {
                          return Categories.list();
                      }
                  }
              }
          }
      })
});

"use strict";


angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            data: {
                title: 'Blank'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeController'
                }
            }
        })
});

"use strict";


angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/home');

})


"use strict";


angular.module('app.locations', ['ui.router'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.locations', {
        abstract: true,
        data: {
          title: 'Catalog'
        }
      })
      .state('app.locations.countries', {
        url: '/locations/countries',
        data: {
          title: 'Countries'
        },
        views: {
          "content@app": {
            controller: 'CountriesController as countries',
            templateUrl: "app/locations/views/countries.html"
          }
        }
      })
      .state('app.locations.regions', {
        url: '/locations/regions',
        data: {
          title: 'Regions'
        },
        views: {
          "content@app": {
            controller: 'RegionsController as regions',
            templateUrl: "app/locations/views/regions.html",
            resolve: {
              countries: function (Countries) {
                return Countries.list();
              }
            }
          }
        }
      })
      .state('app.locations.cities', {
        url: '/locations/cities',
        data: {
          title: 'Cities'
        },
        views: {
          "content@app": {
            controller: 'CitiesController as cities',
            templateUrl: "app/locations/views/cities.html",
            resolve: {
              regions: function (Regions) {
                return Regions.list();
              }
            }
          }
        }
      })
      .state('app.locations.districts', {
        url: '/locations/districts',
        data: {
          title: 'Districts'
        },
        views: {
          "content@app": {
            controller: 'DistrictsController as districts',
            templateUrl: "app/locations/views/districts.html",
            resolve: {
              cities: function (Cities) {
                return Cities.list();
              }
            }
          }
        }
      })
      .state('app.locations.streets', {
        url: '/locations/streets',
        data: {
          title: 'Streets'
        },
        views: {
          "content@app": {
            controller: 'StreetsController as streets',
            templateUrl: "app/locations/views/streets.html",
            resolve: {
              cities: function (Cities) {
                return Cities.list();
              },
              districts: function (Districts) {
                return Districts.list();
              }
            }
          }
        }
      })
      .state('app.locations.buildings', {
        url: '/locations/buildings',
        data: {
          title: 'Buildings'
        },
        views: {
          "content@app": {
            controller: 'BuildingsController as buildings',
            templateUrl: "app/locations/views/buildings.html",
            resolve: {
              streets: function (Streets) {
                return Streets.list();
              }
            }
          }
        }
      })
  });

"use strict";


angular.module('app.smartAdmin', ['ui.router']);


angular.module('app.smartAdmin').config(function ($stateProvider) {

    $stateProvider
        .state('app.smartAdmin', {
            abstract: true,
            data: {
                title: 'SmartAdmin Intel'
            }
        })

        .state('app.smartAdmin.appLayout', {
            url: '/app-layout',
            data: {
                title: 'App Layout'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layout.html'
                }
            }
        })

        .state('app.smartAdmin.diffVer', {
            url: '/different-versions',
            data: {
                title: 'Different Versions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/different-versions.html'
                }
            }
        })

        .state('app.smartAdmin.appLayouts', {
            url: '/app-layouts',
            data: {
                title: 'App Layouts'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layouts.html'
                }
            }
        })

        .state('app.smartAdmin.prebuiltSkins', {
            url: '/prebuilt-skins',
            data: {
                title: 'Prebuilt Skins'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/prebuilt-skins.html'
                }
            }
        })
});
(function(){
    "use strict";

    angular.module('customElements', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.Forms', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.UI', []);
})();
// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.companies.findById() instead.
        "prototype$__findById__companies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/companies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.companies.destroyById() instead.
        "prototype$__destroyById__companies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/companies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.companies.updateById() instead.
        "prototype$__updateById__companies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/companies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.companies() instead.
        "prototype$__get__companies": {
          isArray: true,
          url: urlBase + "/categories/:id/companies",
          method: "GET"
        },

        // INTERNAL. Use Category.companies.create() instead.
        "prototype$__create__companies": {
          url: urlBase + "/categories/:id/companies",
          method: "POST"
        },

        // INTERNAL. Use Category.companies.destroyAll() instead.
        "prototype$__delete__companies": {
          url: urlBase + "/categories/:id/companies",
          method: "DELETE"
        },

        // INTERNAL. Use Category.companies.count() instead.
        "prototype$__count__companies": {
          url: urlBase + "/categories/:id/companies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createMany
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/categories/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";

    /**
     * @ngdoc object
     * @name lbServices.Category.companies
     * @header lbServices.Category.companies
     * @object
     * @description
     *
     * The object `Category.companies` groups methods
     * manipulating `Company` instances related to `Category`.
     *
     * Call {@link lbServices.Category#companies Category.companies()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#companies
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries companies of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Category::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.companies#count
         * @methodOf lbServices.Category.companies
         *
         * @description
         *
         * Counts companies of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.companies.count = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::count::Category::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.companies#create
         * @methodOf lbServices.Category.companies
         *
         * @description
         *
         * Creates a new instance in companies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.create = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::create::Category::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.companies#createMany
         * @methodOf lbServices.Category.companies
         *
         * @description
         *
         * Creates a new instance in companies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.createMany = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::createMany::Category::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.companies#destroyAll
         * @methodOf lbServices.Category.companies
         *
         * @description
         *
         * Deletes all companies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.destroyAll = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::delete::Category::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.companies#destroyById
         * @methodOf lbServices.Category.companies
         *
         * @description
         *
         * Delete a related item by id for companies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.destroyById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::destroyById::Category::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.companies#findById
         * @methodOf lbServices.Category.companies
         *
         * @description
         *
         * Find a related item by id for companies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.findById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::findById::Category::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.companies#updateById
         * @methodOf lbServices.Category.companies
         *
         * @description
         *
         * Update a related item by id for companies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.updateById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::updateById::Category::companies"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Company
 * @header lbServices.Company
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Company` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Company",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/companies/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$__get__details
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Fetches hasOne relation details.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "prototype$__get__details": {
          url: urlBase + "/companies/:id/details",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$__update__details
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "prototype$__update__details": {
          url: urlBase + "/companies/:id/details",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$__destroy__details
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Deletes details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__details": {
          url: urlBase + "/companies/:id/details",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$__get__location
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Fetches hasOne relation location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "prototype$__get__location": {
          url: urlBase + "/companies/:id/location",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$__create__location
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "prototype$__create__location": {
          url: urlBase + "/companies/:id/location",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$__update__location
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "prototype$__update__location": {
          url: urlBase + "/companies/:id/location",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$__destroy__location
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Deletes location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__location": {
          url: urlBase + "/companies/:id/location",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#create
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/companies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#createMany
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/companies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#upsert
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/companies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#exists
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/companies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#findById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/companies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#find
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/companies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#findOne
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/companies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#updateAll
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/companies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#count
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/companies/count",
          method: "GET"
        },

        // INTERNAL. Use Category.companies.findById() instead.
        "::findById::Category::companies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/companies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.companies.destroyById() instead.
        "::destroyById::Category::companies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/companies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.companies.updateById() instead.
        "::updateById::Category::companies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/companies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.companies() instead.
        "::get::Category::companies": {
          isArray: true,
          url: urlBase + "/categories/:id/companies",
          method: "GET"
        },

        // INTERNAL. Use Category.companies.create() instead.
        "::create::Category::companies": {
          url: urlBase + "/categories/:id/companies",
          method: "POST"
        },

        // INTERNAL. Use Category.companies.createMany() instead.
        "::createMany::Category::companies": {
          isArray: true,
          url: urlBase + "/categories/:id/companies",
          method: "POST"
        },

        // INTERNAL. Use Category.companies.destroyAll() instead.
        "::delete::Category::companies": {
          url: urlBase + "/categories/:id/companies",
          method: "DELETE"
        },

        // INTERNAL. Use Category.companies.count() instead.
        "::count::Category::companies": {
          url: urlBase + "/categories/:id/companies/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Company#updateOrCreate
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Company#update
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];


    /**
    * @ngdoc property
    * @name lbServices.Company#modelName
    * @propertyOf lbServices.Company
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Company`.
    */
    R.modelName = "Company";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Country
 * @header lbServices.Country
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Country` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Country",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/counties/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Country.regions.findById() instead.
        "prototype$__findById__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/counties/:id/regions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.destroyById() instead.
        "prototype$__destroyById__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/counties/:id/regions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.updateById() instead.
        "prototype$__updateById__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/counties/:id/regions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.regions() instead.
        "prototype$__get__regions": {
          isArray: true,
          url: urlBase + "/counties/:id/regions",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.create() instead.
        "prototype$__create__regions": {
          url: urlBase + "/counties/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Country.regions.destroyAll() instead.
        "prototype$__delete__regions": {
          url: urlBase + "/counties/:id/regions",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.count() instead.
        "prototype$__count__regions": {
          url: urlBase + "/counties/:id/regions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#create
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/counties",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#createMany
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/counties",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#upsert
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/counties",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#exists
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/counties/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#findById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/counties/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#find
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/counties",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#findOne
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/counties/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#updateAll
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/counties/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#deleteById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/counties/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#count
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/counties/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Country#updateOrCreate
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Country#update
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Country#destroyById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Country#removeById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Country#modelName
    * @propertyOf lbServices.Country
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Country`.
    */
    R.modelName = "Country";

    /**
     * @ngdoc object
     * @name lbServices.Country.regions
     * @header lbServices.Country.regions
     * @object
     * @description
     *
     * The object `Country.regions` groups methods
     * manipulating `Region` instances related to `Country`.
     *
     * Call {@link lbServices.Country#regions Country.regions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Country#regions
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Queries regions of Country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#count
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Counts regions of Country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.regions.count = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::count::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#create
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Creates a new instance in regions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.create = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::create::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#createMany
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Creates a new instance in regions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.createMany = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::createMany::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#destroyAll
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Deletes all regions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.regions.destroyAll = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::delete::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#destroyById
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Delete a related item by id for regions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.regions.destroyById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::destroyById::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#findById
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Find a related item by id for regions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.findById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::findById::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#updateById
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Update a related item by id for regions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.updateById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::updateById::Country::regions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Region
 * @header lbServices.Region
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Region` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Region",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/regions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Region.cities.findById() instead.
        "prototype$__findById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/regions/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.destroyById() instead.
        "prototype$__destroyById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/regions/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.updateById() instead.
        "prototype$__updateById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/regions/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.cities() instead.
        "prototype$__get__cities": {
          isArray: true,
          url: urlBase + "/regions/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.create() instead.
        "prototype$__create__cities": {
          url: urlBase + "/regions/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Region.cities.destroyAll() instead.
        "prototype$__delete__cities": {
          url: urlBase + "/regions/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.count() instead.
        "prototype$__count__cities": {
          url: urlBase + "/regions/:id/cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#create
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/regions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#createMany
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/regions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#upsert
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/regions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#exists
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/regions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#findById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/regions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#find
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/regions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#findOne
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/regions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#updateAll
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/regions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#deleteById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/regions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#count
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/regions/count",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.findById() instead.
        "::findById::Country::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/counties/:id/regions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.destroyById() instead.
        "::destroyById::Country::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/counties/:id/regions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.updateById() instead.
        "::updateById::Country::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/counties/:id/regions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.regions() instead.
        "::get::Country::regions": {
          isArray: true,
          url: urlBase + "/counties/:id/regions",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.create() instead.
        "::create::Country::regions": {
          url: urlBase + "/counties/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Country.regions.createMany() instead.
        "::createMany::Country::regions": {
          isArray: true,
          url: urlBase + "/counties/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Country.regions.destroyAll() instead.
        "::delete::Country::regions": {
          url: urlBase + "/counties/:id/regions",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.count() instead.
        "::count::Country::regions": {
          url: urlBase + "/counties/:id/regions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Region#updateOrCreate
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Region#update
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Region#destroyById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Region#removeById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Region#modelName
    * @propertyOf lbServices.Region
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Region`.
    */
    R.modelName = "Region";

    /**
     * @ngdoc object
     * @name lbServices.Region.cities
     * @header lbServices.Region.cities
     * @object
     * @description
     *
     * The object `Region.cities` groups methods
     * manipulating `City` instances related to `Region`.
     *
     * Call {@link lbServices.Region#cities Region.cities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Region#cities
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Queries cities of Region.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#count
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Counts cities of Region.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#create
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#createMany
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::createMany::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#destroyAll
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Deletes all cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#destroyById
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Delete a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#findById
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Find a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#updateById
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Update a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::Region::cities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.City
 * @header lbServices.City
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `City` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "City",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/cities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use City.districts.findById() instead.
        "prototype$__findById__districts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/districts/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.districts.destroyById() instead.
        "prototype$__destroyById__districts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/districts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.districts.updateById() instead.
        "prototype$__updateById__districts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/districts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.streets.findById() instead.
        "prototype$__findById__streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/streets/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.streets.destroyById() instead.
        "prototype$__destroyById__streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/streets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.streets.updateById() instead.
        "prototype$__updateById__streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/streets/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.districts() instead.
        "prototype$__get__districts": {
          isArray: true,
          url: urlBase + "/cities/:id/districts",
          method: "GET"
        },

        // INTERNAL. Use City.districts.create() instead.
        "prototype$__create__districts": {
          url: urlBase + "/cities/:id/districts",
          method: "POST"
        },

        // INTERNAL. Use City.districts.destroyAll() instead.
        "prototype$__delete__districts": {
          url: urlBase + "/cities/:id/districts",
          method: "DELETE"
        },

        // INTERNAL. Use City.districts.count() instead.
        "prototype$__count__districts": {
          url: urlBase + "/cities/:id/districts/count",
          method: "GET"
        },

        // INTERNAL. Use City.streets() instead.
        "prototype$__get__streets": {
          isArray: true,
          url: urlBase + "/cities/:id/streets",
          method: "GET"
        },

        // INTERNAL. Use City.streets.create() instead.
        "prototype$__create__streets": {
          url: urlBase + "/cities/:id/streets",
          method: "POST"
        },

        // INTERNAL. Use City.streets.destroyAll() instead.
        "prototype$__delete__streets": {
          url: urlBase + "/cities/:id/streets",
          method: "DELETE"
        },

        // INTERNAL. Use City.streets.count() instead.
        "prototype$__count__streets": {
          url: urlBase + "/cities/:id/streets/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#create
         * @methodOf lbServices.City
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/cities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#createMany
         * @methodOf lbServices.City
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/cities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#upsert
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/cities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#exists
         * @methodOf lbServices.City
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/cities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#findById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/cities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#find
         * @methodOf lbServices.City
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/cities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#findOne
         * @methodOf lbServices.City
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/cities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#updateAll
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/cities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#deleteById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/cities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#count
         * @methodOf lbServices.City
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/cities/count",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.findById() instead.
        "::findById::Region::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/regions/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.destroyById() instead.
        "::destroyById::Region::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/regions/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.updateById() instead.
        "::updateById::Region::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/regions/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.cities() instead.
        "::get::Region::cities": {
          isArray: true,
          url: urlBase + "/regions/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.create() instead.
        "::create::Region::cities": {
          url: urlBase + "/regions/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Region.cities.createMany() instead.
        "::createMany::Region::cities": {
          isArray: true,
          url: urlBase + "/regions/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Region.cities.destroyAll() instead.
        "::delete::Region::cities": {
          url: urlBase + "/regions/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.count() instead.
        "::count::Region::cities": {
          url: urlBase + "/regions/:id/cities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.City#updateOrCreate
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.City#update
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.City#destroyById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.City#removeById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.City#modelName
    * @propertyOf lbServices.City
    * @description
    * The name of the model represented by this $resource,
    * i.e. `City`.
    */
    R.modelName = "City";

    /**
     * @ngdoc object
     * @name lbServices.City.districts
     * @header lbServices.City.districts
     * @object
     * @description
     *
     * The object `City.districts` groups methods
     * manipulating `District` instances related to `City`.
     *
     * Call {@link lbServices.City#districts City.districts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.City#districts
         * @methodOf lbServices.City
         *
         * @description
         *
         * Queries districts of City.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R.districts = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::get::City::districts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.districts#count
         * @methodOf lbServices.City.districts
         *
         * @description
         *
         * Counts districts of City.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.districts.count = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::count::City::districts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.districts#create
         * @methodOf lbServices.City.districts
         *
         * @description
         *
         * Creates a new instance in districts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R.districts.create = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::create::City::districts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.districts#createMany
         * @methodOf lbServices.City.districts
         *
         * @description
         *
         * Creates a new instance in districts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R.districts.createMany = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::createMany::City::districts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.districts#destroyAll
         * @methodOf lbServices.City.districts
         *
         * @description
         *
         * Deletes all districts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.districts.destroyAll = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::delete::City::districts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.districts#destroyById
         * @methodOf lbServices.City.districts
         *
         * @description
         *
         * Delete a related item by id for districts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for districts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.districts.destroyById = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::destroyById::City::districts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.districts#findById
         * @methodOf lbServices.City.districts
         *
         * @description
         *
         * Find a related item by id for districts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for districts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R.districts.findById = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::findById::City::districts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.districts#updateById
         * @methodOf lbServices.City.districts
         *
         * @description
         *
         * Update a related item by id for districts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for districts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R.districts.updateById = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::updateById::City::districts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.streets
     * @header lbServices.City.streets
     * @object
     * @description
     *
     * The object `City.streets` groups methods
     * manipulating `Street` instances related to `City`.
     *
     * Call {@link lbServices.City#streets City.streets()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.City#streets
         * @methodOf lbServices.City
         *
         * @description
         *
         * Queries streets of City.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::get::City::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.streets#count
         * @methodOf lbServices.City.streets
         *
         * @description
         *
         * Counts streets of City.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.streets.count = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::count::City::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.streets#create
         * @methodOf lbServices.City.streets
         *
         * @description
         *
         * Creates a new instance in streets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.create = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::create::City::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.streets#createMany
         * @methodOf lbServices.City.streets
         *
         * @description
         *
         * Creates a new instance in streets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.createMany = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::createMany::City::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.streets#destroyAll
         * @methodOf lbServices.City.streets
         *
         * @description
         *
         * Deletes all streets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.streets.destroyAll = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::delete::City::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.streets#destroyById
         * @methodOf lbServices.City.streets
         *
         * @description
         *
         * Delete a related item by id for streets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.streets.destroyById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::destroyById::City::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.streets#findById
         * @methodOf lbServices.City.streets
         *
         * @description
         *
         * Find a related item by id for streets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.findById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::findById::City::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.streets#updateById
         * @methodOf lbServices.City.streets
         *
         * @description
         *
         * Update a related item by id for streets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streets
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.updateById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::updateById::City::streets"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.District
 * @header lbServices.District
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `District` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "District",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/districts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use District.streets.findById() instead.
        "prototype$__findById__streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/districts/:id/streets/:fk",
          method: "GET"
        },

        // INTERNAL. Use District.streets.destroyById() instead.
        "prototype$__destroyById__streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/districts/:id/streets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use District.streets.updateById() instead.
        "prototype$__updateById__streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/districts/:id/streets/:fk",
          method: "PUT"
        },

        // INTERNAL. Use District.streets() instead.
        "prototype$__get__streets": {
          isArray: true,
          url: urlBase + "/districts/:id/streets",
          method: "GET"
        },

        // INTERNAL. Use District.streets.create() instead.
        "prototype$__create__streets": {
          url: urlBase + "/districts/:id/streets",
          method: "POST"
        },

        // INTERNAL. Use District.streets.destroyAll() instead.
        "prototype$__delete__streets": {
          url: urlBase + "/districts/:id/streets",
          method: "DELETE"
        },

        // INTERNAL. Use District.streets.count() instead.
        "prototype$__count__streets": {
          url: urlBase + "/districts/:id/streets/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#create
         * @methodOf lbServices.District
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/districts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#createMany
         * @methodOf lbServices.District
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/districts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#upsert
         * @methodOf lbServices.District
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/districts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#exists
         * @methodOf lbServices.District
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/districts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#findById
         * @methodOf lbServices.District
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/districts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#find
         * @methodOf lbServices.District
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/districts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#findOne
         * @methodOf lbServices.District
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/districts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#updateAll
         * @methodOf lbServices.District
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/districts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#deleteById
         * @methodOf lbServices.District
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/districts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.District#count
         * @methodOf lbServices.District
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/districts/count",
          method: "GET"
        },

        // INTERNAL. Use City.districts.findById() instead.
        "::findById::City::districts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/districts/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.districts.destroyById() instead.
        "::destroyById::City::districts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/districts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.districts.updateById() instead.
        "::updateById::City::districts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/districts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.districts() instead.
        "::get::City::districts": {
          isArray: true,
          url: urlBase + "/cities/:id/districts",
          method: "GET"
        },

        // INTERNAL. Use City.districts.create() instead.
        "::create::City::districts": {
          url: urlBase + "/cities/:id/districts",
          method: "POST"
        },

        // INTERNAL. Use City.districts.createMany() instead.
        "::createMany::City::districts": {
          isArray: true,
          url: urlBase + "/cities/:id/districts",
          method: "POST"
        },

        // INTERNAL. Use City.districts.destroyAll() instead.
        "::delete::City::districts": {
          url: urlBase + "/cities/:id/districts",
          method: "DELETE"
        },

        // INTERNAL. Use City.districts.count() instead.
        "::count::City::districts": {
          url: urlBase + "/cities/:id/districts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.District#updateOrCreate
         * @methodOf lbServices.District
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.District#update
         * @methodOf lbServices.District
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.District#destroyById
         * @methodOf lbServices.District
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.District#removeById
         * @methodOf lbServices.District
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `District` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.District#modelName
    * @propertyOf lbServices.District
    * @description
    * The name of the model represented by this $resource,
    * i.e. `District`.
    */
    R.modelName = "District";

    /**
     * @ngdoc object
     * @name lbServices.District.streets
     * @header lbServices.District.streets
     * @object
     * @description
     *
     * The object `District.streets` groups methods
     * manipulating `Street` instances related to `District`.
     *
     * Call {@link lbServices.District#streets District.streets()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.District#streets
         * @methodOf lbServices.District
         *
         * @description
         *
         * Queries streets of District.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::get::District::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.District.streets#count
         * @methodOf lbServices.District.streets
         *
         * @description
         *
         * Counts streets of District.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.streets.count = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::count::District::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.District.streets#create
         * @methodOf lbServices.District.streets
         *
         * @description
         *
         * Creates a new instance in streets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.create = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::create::District::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.District.streets#createMany
         * @methodOf lbServices.District.streets
         *
         * @description
         *
         * Creates a new instance in streets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.createMany = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::createMany::District::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.District.streets#destroyAll
         * @methodOf lbServices.District.streets
         *
         * @description
         *
         * Deletes all streets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.streets.destroyAll = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::delete::District::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.District.streets#destroyById
         * @methodOf lbServices.District.streets
         *
         * @description
         *
         * Delete a related item by id for streets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.streets.destroyById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::destroyById::District::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.District.streets#findById
         * @methodOf lbServices.District.streets
         *
         * @description
         *
         * Find a related item by id for streets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.findById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::findById::District::streets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.District.streets#updateById
         * @methodOf lbServices.District.streets
         *
         * @description
         *
         * Update a related item by id for streets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streets
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R.streets.updateById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::updateById::District::streets"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.StreetType
 * @header lbServices.StreetType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `StreetType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "StreetType",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/streetTypes/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.StreetType#create
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/streetTypes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#createMany
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/streetTypes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#upsert
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/streetTypes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#exists
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/streetTypes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#findById
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/streetTypes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#find
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/streetTypes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#findOne
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/streetTypes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#updateAll
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/streetTypes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#deleteById
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/streetTypes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.StreetType#count
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/streetTypes/count",
          method: "GET"
        },

        // INTERNAL. Use Street.streetType() instead.
        "::get::Street::streetType": {
          url: urlBase + "/streets/:id/streetType",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.StreetType#updateOrCreate
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.StreetType#update
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.StreetType#destroyById
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.StreetType#removeById
         * @methodOf lbServices.StreetType
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.StreetType#modelName
    * @propertyOf lbServices.StreetType
    * @description
    * The name of the model represented by this $resource,
    * i.e. `StreetType`.
    */
    R.modelName = "StreetType";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Street
 * @header lbServices.Street
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Street` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Street",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/streets/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Street.streetType() instead.
        "prototype$__get__streetType": {
          url: urlBase + "/streets/:id/streetType",
          method: "GET"
        },

        // INTERNAL. Use Street.buildings.findById() instead.
        "prototype$__findById__buildings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/streets/:id/buildings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Street.buildings.destroyById() instead.
        "prototype$__destroyById__buildings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/streets/:id/buildings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Street.buildings.updateById() instead.
        "prototype$__updateById__buildings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/streets/:id/buildings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Street.buildings() instead.
        "prototype$__get__buildings": {
          isArray: true,
          url: urlBase + "/streets/:id/buildings",
          method: "GET"
        },

        // INTERNAL. Use Street.buildings.create() instead.
        "prototype$__create__buildings": {
          url: urlBase + "/streets/:id/buildings",
          method: "POST"
        },

        // INTERNAL. Use Street.buildings.destroyAll() instead.
        "prototype$__delete__buildings": {
          url: urlBase + "/streets/:id/buildings",
          method: "DELETE"
        },

        // INTERNAL. Use Street.buildings.count() instead.
        "prototype$__count__buildings": {
          url: urlBase + "/streets/:id/buildings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#create
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/streets",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#createMany
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/streets",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#upsert
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/streets",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#exists
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/streets/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#findById
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/streets/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#find
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/streets",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#findOne
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/streets/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#updateAll
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/streets/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#deleteById
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/streets/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Street#count
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/streets/count",
          method: "GET"
        },

        // INTERNAL. Use City.streets.findById() instead.
        "::findById::City::streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/streets/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.streets.destroyById() instead.
        "::destroyById::City::streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/streets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.streets.updateById() instead.
        "::updateById::City::streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/streets/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.streets() instead.
        "::get::City::streets": {
          isArray: true,
          url: urlBase + "/cities/:id/streets",
          method: "GET"
        },

        // INTERNAL. Use City.streets.create() instead.
        "::create::City::streets": {
          url: urlBase + "/cities/:id/streets",
          method: "POST"
        },

        // INTERNAL. Use City.streets.createMany() instead.
        "::createMany::City::streets": {
          isArray: true,
          url: urlBase + "/cities/:id/streets",
          method: "POST"
        },

        // INTERNAL. Use City.streets.destroyAll() instead.
        "::delete::City::streets": {
          url: urlBase + "/cities/:id/streets",
          method: "DELETE"
        },

        // INTERNAL. Use City.streets.count() instead.
        "::count::City::streets": {
          url: urlBase + "/cities/:id/streets/count",
          method: "GET"
        },

        // INTERNAL. Use District.streets.findById() instead.
        "::findById::District::streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/districts/:id/streets/:fk",
          method: "GET"
        },

        // INTERNAL. Use District.streets.destroyById() instead.
        "::destroyById::District::streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/districts/:id/streets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use District.streets.updateById() instead.
        "::updateById::District::streets": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/districts/:id/streets/:fk",
          method: "PUT"
        },

        // INTERNAL. Use District.streets() instead.
        "::get::District::streets": {
          isArray: true,
          url: urlBase + "/districts/:id/streets",
          method: "GET"
        },

        // INTERNAL. Use District.streets.create() instead.
        "::create::District::streets": {
          url: urlBase + "/districts/:id/streets",
          method: "POST"
        },

        // INTERNAL. Use District.streets.createMany() instead.
        "::createMany::District::streets": {
          isArray: true,
          url: urlBase + "/districts/:id/streets",
          method: "POST"
        },

        // INTERNAL. Use District.streets.destroyAll() instead.
        "::delete::District::streets": {
          url: urlBase + "/districts/:id/streets",
          method: "DELETE"
        },

        // INTERNAL. Use District.streets.count() instead.
        "::count::District::streets": {
          url: urlBase + "/districts/:id/streets/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Street#updateOrCreate
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Street#update
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Street#destroyById
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Street#removeById
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Street` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Street#modelName
    * @propertyOf lbServices.Street
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Street`.
    */
    R.modelName = "Street";


        /**
         * @ngdoc method
         * @name lbServices.Street#streetType
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Fetches belongsTo relation streetType.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StreetType` object.)
         * </em>
         */
        R.streetType = function() {
          var TargetResource = $injector.get("StreetType");
          var action = TargetResource["::get::Street::streetType"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Street.buildings
     * @header lbServices.Street.buildings
     * @object
     * @description
     *
     * The object `Street.buildings` groups methods
     * manipulating `Building` instances related to `Street`.
     *
     * Call {@link lbServices.Street#buildings Street.buildings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Street#buildings
         * @methodOf lbServices.Street
         *
         * @description
         *
         * Queries buildings of Street.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R.buildings = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::get::Street::buildings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Street.buildings#count
         * @methodOf lbServices.Street.buildings
         *
         * @description
         *
         * Counts buildings of Street.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.buildings.count = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::count::Street::buildings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Street.buildings#create
         * @methodOf lbServices.Street.buildings
         *
         * @description
         *
         * Creates a new instance in buildings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R.buildings.create = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::create::Street::buildings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Street.buildings#createMany
         * @methodOf lbServices.Street.buildings
         *
         * @description
         *
         * Creates a new instance in buildings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R.buildings.createMany = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::createMany::Street::buildings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Street.buildings#destroyAll
         * @methodOf lbServices.Street.buildings
         *
         * @description
         *
         * Deletes all buildings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.buildings.destroyAll = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::delete::Street::buildings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Street.buildings#destroyById
         * @methodOf lbServices.Street.buildings
         *
         * @description
         *
         * Delete a related item by id for buildings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for buildings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.buildings.destroyById = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::destroyById::Street::buildings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Street.buildings#findById
         * @methodOf lbServices.Street.buildings
         *
         * @description
         *
         * Find a related item by id for buildings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for buildings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R.buildings.findById = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::findById::Street::buildings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Street.buildings#updateById
         * @methodOf lbServices.Street.buildings
         *
         * @description
         *
         * Update a related item by id for buildings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for buildings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R.buildings.updateById = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::updateById::Street::buildings"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Building
 * @header lbServices.Building
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Building` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Building",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/buildings/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Building#create
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/buildings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#createMany
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/buildings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#upsert
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/buildings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#exists
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/buildings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#findById
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/buildings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#find
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/buildings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#findOne
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/buildings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#updateAll
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/buildings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#deleteById
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/buildings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Building#count
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/buildings/count",
          method: "GET"
        },

        // INTERNAL. Use Street.buildings.findById() instead.
        "::findById::Street::buildings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/streets/:id/buildings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Street.buildings.destroyById() instead.
        "::destroyById::Street::buildings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/streets/:id/buildings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Street.buildings.updateById() instead.
        "::updateById::Street::buildings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/streets/:id/buildings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Street.buildings() instead.
        "::get::Street::buildings": {
          isArray: true,
          url: urlBase + "/streets/:id/buildings",
          method: "GET"
        },

        // INTERNAL. Use Street.buildings.create() instead.
        "::create::Street::buildings": {
          url: urlBase + "/streets/:id/buildings",
          method: "POST"
        },

        // INTERNAL. Use Street.buildings.createMany() instead.
        "::createMany::Street::buildings": {
          isArray: true,
          url: urlBase + "/streets/:id/buildings",
          method: "POST"
        },

        // INTERNAL. Use Street.buildings.destroyAll() instead.
        "::delete::Street::buildings": {
          url: urlBase + "/streets/:id/buildings",
          method: "DELETE"
        },

        // INTERNAL. Use Street.buildings.count() instead.
        "::count::Street::buildings": {
          url: urlBase + "/streets/:id/buildings/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Building#updateOrCreate
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Building#update
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Building#destroyById
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Building#removeById
         * @methodOf lbServices.Building
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Building` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Building#modelName
    * @propertyOf lbServices.Building
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Building`.
    */
    R.modelName = "Building";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);

'use strict';

angular.module('app.catalog').controller('CategoriesController', function () {
  var vm = this;

  //UI settings
  vm.UI = {
    categoriesTableSettings: {
      name: 'categoriesTable',
      title: 'Категории',
      apiUrl: '/categories',
      buttons: {
        add: true,
        refresh: true,
        edit: true,
        remove: true
      },
      columns: [
        {
          dataField: 'id',
          title: 'ID',
          readOnly: true
        },
        {
          dataField: 'name',
          title: 'Название',
          required: true
        },
        {
          dataField: 'slug',
          title: 'Slug',
          required: true
        },
        {
          dataField: 'parent_id',
          title: 'ID родителя',
          editorType: 'selectBox',
          editorOptions: {
            dataSourceString: 'dataListArray',
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'icon',
          title: 'Иконка'
        },
        {
          dataField: 'position',
          title: 'Позиция',
          required: true,
          editorType: 'number'
        },
        {
          dataField: 'active',
          title: 'Активно',
          editorType: 'checkbox'
        }
      ]
    }
  };


});
'use strict';

angular.module('app.catalog').controller('CompaniesController', function (categories) {
  var vm = this;

  //UI settings
  vm.UI = {
    companiesTableSettings: {
      name: 'companiesTable',
      title: 'Компании',
      apiUrl: '/companies',
      buttons: {
        add: true,
        refresh: true,
        edit: true,
        remove: true
      },
      columns: [
        {
          dataField: 'id',
          title: 'ID',
          readOnly: true
        },
        {
          dataField: 'name',
          title: 'Название',
          required: true
        },
        {
          dataField: 'title',
          title: 'Заголовок',
          required: true
        },
        {
          dataField: 'category_id',
          title: 'ID категории',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: categories,
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'desc',
          title: 'Описание'
        },
        {
          dataField: 'active',
          title: 'Активно',
          editorType: 'checkbox'
        }
      ]
    }
  };


});
'use strict';

angular.module('customElements')
  .service('Categories', function ($http, API_VERSION, BaseTableCrud) {
    
    var _Categories = this;
    var _apiUrl = '/categories';
    var crud = new BaseTableCrud(_apiUrl);
    
    _Categories.list = crud.list;
});
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/layout/layout.tpl.html","<!-- HEADER -->\n<div data-smart-include=\"app/layout/partials/header.tpl.html\" class=\"placeholder-header\"></div>\n<!-- END HEADER -->\n\n\n<!-- Left panel : Navigation area -->\n<!-- Note: This width of the aside area can be adjusted through LESS variables -->\n<div data-smart-include=\"app/layout/partials/navigation.tpl.html\" class=\"placeholder-left-panel\"></div>\n\n<!-- END NAVIGATION -->\n\n<!-- MAIN PANEL -->\n<div id=\"main\" role=\"main\">\n\n    <!-- RIBBON -->\n    <div id=\"ribbon\">\n\n        <!-- breadcrumb -->\n        <state-breadcrumbs></state-breadcrumbs>\n        <!-- end breadcrumb -->\n\n\n    </div>\n    <!-- END RIBBON -->\n\n\n    <div data-smart-router-animation-wrap=\"content content@app\" data-wrap-for=\"#content\">\n        <div data-ui-view=\"content\" data-autoscroll=\"false\"></div>\n    </div>\n\n</div>\n<!-- END MAIN PANEL -->\n\n<!-- PAGE FOOTER -->\n<div data-smart-include=\"app/layout/partials/footer.tpl.html\"></div>\n\n<div data-smart-include=\"app/layout/shortcut/shortcut.tpl.html\"></div>\n\n<!-- END PAGE FOOTER -->\n\n\n");
$templateCache.put("app/layout/language/language-selector.tpl.html","<ul class=\"header-dropdown-list hidden-xs ng-cloak\" ng-controller=\"LanguagesCtrl\">\n    <li class=\"dropdown\" dropdown>\n        <a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href> <img src=\"styles/img/blank.gif\" class=\"flag flag-{{currentLanguage.key}}\" alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n            <i class=\"fa fa-angle-down\"></i> </a>\n        <ul class=\"dropdown-menu pull-right\">\n            <li ng-class=\"{active: language==currentLanguage}\" ng-repeat=\"language in languages\">\n                <a ng-click=\"selectLanguage(language)\" ><img src=\"styles/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n                                                   alt=\"{{language.alt}}\"> {{language.title}}</a>\n            </li>\n        </ul>\n    </li>\n</ul>");
$templateCache.put("app/layout/partials/footer.tpl.html","<div class=\"page-footer\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6\">\n            <span class=\"txt-color-white\">SmartAdmin WebApp © 2013-2016</span>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n            <div class=\"txt-color-white inline-block\">\n                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\n                    <strong>52 mins ago &nbsp;</strong> </i>\n\n                <div class=\"btn-group dropup\">\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu pull-right text-left\">\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n                                </p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <button class=\"btn btn-block btn-default\">refresh</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/layout/partials/header.tpl.html","<header id=\"header\">\n<div id=\"logo-group\">\n\n    <!-- PLACE YOUR LOGO HERE -->\n    <span id=\"logo\"> <img src=\"styles/img/logo.png\" alt=\"SmartAdmin\"> </span>\n    <!-- END LOGO PLACEHOLDER -->\n</div>\n\n<!-- pulled right: nav area -->\n<div class=\"pull-right\">\n\n    <!-- collapse menu button -->\n    <div id=\"hide-menu\" class=\"btn-header pull-right\">\n        <span> <a toggle-menu title=\"Collapse Menu\"><i\n                class=\"fa fa-reorder\"></i></a> </span>\n    </div>\n    <!-- end collapse menu -->\n\n    <!-- #MOBILE -->\n    <!-- Top menu profile link : this shows only when top menu is active -->\n    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n        <li class=\"\">\n\n            <ul class=\"dropdown-menu pull-right\">\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"><i\n                            class=\"fa fa-cog\"></i> Setting</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a ui-sref=\"app.appViews.profileDemo\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i class=\"fa fa-user\"></i>\n                        <u>P</u>rofile</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\n                       data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\n                       data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n                            class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n\n    <!-- logout button -->\n    <div id=\"logout\" class=\"btn-header transparent pull-right\">\n        <span> <a ui-sref=\"login\" title=\"Sign Out\" data-action=\"userLogout\"\n                  data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\n                class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n    <!-- end logout button -->\n\n    <!-- search mobile button (this is hidden till mobile view port) -->\n    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\" data-search-mobile>\n        <span> <a href=\"#\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n    </div>\n    <!-- end search mobile button -->\n\n    <!-- input: search field -->\n    <form action=\"#/search\" class=\"header-search pull-right\">\n        <input id=\"search-fld\" type=\"text\" name=\"param\" placeholder=\"Find reports and more\" data-autocomplete=\'[\n					\"ActionScript\",\n					\"AppleScript\",\n					\"Asp\",\n					\"BASIC\",\n					\"C\",\n					\"C++\",\n					\"Clojure\",\n					\"COBOL\",\n					\"ColdFusion\",\n					\"Erlang\",\n					\"Fortran\",\n					\"Groovy\",\n					\"Haskell\",\n					\"Java\",\n					\"JavaScript\",\n					\"Lisp\",\n					\"Perl\",\n					\"PHP\",\n					\"Python\",\n					\"Ruby\",\n					\"Scala\",\n					\"Scheme\"]\'>\n        <button type=\"submit\">\n            <i class=\"fa fa-search\"></i>\n        </button>\n        <a href=\"$\" id=\"cancel-search-js\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n    </form>\n    <!-- end input: search field -->\n\n    <!-- fullscreen button -->\n    <div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n        <span> <a full-screen title=\"Full Screen\"><i\n                class=\"fa fa-arrows-alt\"></i></a> </span>\n    </div>\n    <!-- end fullscreen button -->\n\n</div>\n<!-- end pulled right: nav area -->\n\n</header>");
$templateCache.put("app/layout/partials/navigation.tpl.html","<aside id=\"left-panel\">\n\n    <!-- User info -->\n    <div login-info></div>\n    <!-- end user info -->\n\n    <nav>\n        <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n        Please note that these links work a bit different than\n        traditional href=\"\" links. See documentation for details.\n        -->\n\n        <ul data-smart-menu>\n\n            <li data-ui-sref-active=\"active\">\n                <a data-ui-sref=\"app.home\" title=\"Outlook\">\n                    <i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">Главная</span>\n                </a>\n            </li>\n\n            <li data-menu-collapse>\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-list\"></i> <span class=\"menu-item-parent\">Каталог</span></a>\n                <ul>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.catalog.categories\">Ктегории</a>\n                    </li>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.catalog.companies\">Компании</a>\n                    </li>\n                </ul>\n            </li>\n            <li data-menu-collapse>\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-map-marker\"></i> <span class=\"menu-item-parent\">Локации</span></a>\n                <ul>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.locations.countries\">Страны</a>\n                    </li>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.locations.regions\">Регионы</a>\n                    </li>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.locations.cities\">Города</a>\n                    </li>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.locations.districts\">Районы</a>\n                    </li>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.locations.streets\">Улицы</a>\n                    </li>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.locations.buildings\">Здания</a>\n                    </li>\n\n                </ul>\n            </li>\n\n        </ul>\n\n        <!-- NOTE: This allows you to pull menu items from server -->\n        <!-- <ul data-smart-menu-items=\"/api/menu-items.json\"></ul> -->\n    </nav>\n\n  <span class=\"minifyme\" data-action=\"minifyMenu\" minify-menu>\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n  </span>\n\n</aside>");
$templateCache.put("app/layout/partials/sub-header.tpl.html","<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" data-sparkline-container>\n    <ul id=\"sparks\" class=\"\">\n        <li class=\"sparks-info\">\n            <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\n            <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n                1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n            </div>\n        </li>\n        <li class=\"sparks-info\">\n            <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n            <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n                110,150,300,130,400,240,220,310,220,300, 270, 210\n            </div>\n        </li>\n        <li class=\"sparks-info\">\n            <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\n            <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n                110,150,300,130,400,240,220,310,220,300, 270, 210\n            </div>\n        </li>\n    </ul>\n</div>\n			");
$templateCache.put("app/layout/partials/voice-commands.tpl.html","<!-- TRIGGER BUTTON:\n<a href=\"/my-ajax-page.html\" data-toggle=\"modal\" data-target=\"#remoteModal\" class=\"btn btn-default\">Open Modal</a>  -->\n\n<!-- MODAL PLACE HOLDER\n<div class=\"modal fade\" id=\"remoteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"remoteModalLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\"></div>\n</div>\n</div>   -->\n<!--////////////////////////////////////-->\n\n<!--<div class=\"modal-header\">\n<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n&times;\n</button>\n<h4 class=\"modal-title\" id=\"myModalLabel\">Command List</h4>\n</div>-->\n<div class=\"modal-body\">\n\n	<h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n	<hr class=\"simple\">\n	<h5>Instruction</h5>\n\n	Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n	You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon indicating activation.\n	The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don\'t have any microphone installed.\n	<br>\n	<br>\n	As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n	<br>\n	<br>\n	If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer) protocol you can wave this security measure and have an unintrupted Voice Command.\n	<br>\n	<br>\n	<h5>Commands</h5>\n	<ul>\n		<li>\n			<strong>\'show\' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show inbox\"</strong> or <strong>\"show calendar\"</strong>\n		</li>\n		<li>\n			<strong>\'mute\' </strong> - mutes all sound effects for the theme.\n		</li>\n		<li>\n			<strong>\'sound on\'</strong> - unmutes all sound effects for the theme.\n		</li>\n		<li>\n			<span class=\"text-danger\"><strong>\'stop\'</strong></span> - deactivates voice command.\n		</li>\n		<li>\n			<span class=\"text-primary\"><strong>\'help\'</strong></span> - brings up the command list\n		</li>\n		<li>\n			<span class=\"text-danger\"><strong>\'got it\'</strong></span> - closes help modal\n		</li>\n		<li>\n			<strong>\'hide navigation\'</strong> - toggle navigation collapse\n		</li>\n		<li>\n			<strong>\'show navigation\'</strong> - toggle navigation to open (can be used again to close)\n		</li>\n		<li>\n			<strong>\'scroll up\'</strong> - scrolls to the top of the page\n		</li>\n		<li>\n			<strong>\'scroll down\'</strong> - scrollts to the bottom of the page\n		</li>\n		<li>\n			<strong>\'go back\' </strong> - goes back in history (history -1 click)\n		</li>\n		<li>\n			<strong>\'logout\'</strong> - logs you out\n		</li>\n	</ul>\n	<br>\n	<h5>Adding your own commands</h5>\n	Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored inside <strong>app.config.js</strong> file under the <code>var commands = {...}</code>. \n\n	<hr class=\"simple\">\n	<div class=\"text-right\">\n		<button type=\"button\" class=\"btn btn-success btn-lg\" data-dismiss=\"modal\">\n			Got it!\n		</button>\n	</div>\n\n</div>\n<!--<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Got it!</button>\n</div> -->");
$templateCache.put("app/layout/shortcut/shortcut.tpl.html","<div id=\"shortcut\">\n	<ul>\n		<li>\n			<a href=\"#/inbox/\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/calendar\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/maps\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/invoice\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i class=\"fa fa-book fa-4x\"></i> <span>Invoice <span class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/gallery\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/profile\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n		</li>\n	</ul>\n</div>");
$templateCache.put("app/_common/customElements/templates/table.tpl.html","<div id=\"c-table\">\n  <div jarvis-widget id=\"{{settings.name}}\" data-widget-color=\"darken\" data-widget-editbutton=\"false\">\n    <header>\n      <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n      <h2>{{settings.title}}</h2>\n    </header>\n    <div>\n      <div class=\"widget-body no-padding\">\n        <p class=\"control-buttons\">\n          <!-- Table control buttons -->\n          <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#{{settings.name}}NewRowModal\"\n                  ng-if=\"settings.buttons.add\">\n            <i class=\"fa fa-plus\"></i>&nbsp;Добавить\n          </button>\n          <button ng-click=\"reloadTableData()\" type=\"button\" class=\"btn btn-info\"\n                  ng-if=\"settings.buttons.refresh\">\n            <i class=\"fa fa-refresh\"></i>&nbsp;Обновить данные\n          </button>\n          <!--End Table control buttons -->\n          <!-- Table -->\n        <table class=\"table table-striped table-bordered table-hover\" width=\"100%\"\n               datatable\n               dt-options=\"tableOptions\"\n               dt-columns=\"tableColumns\"\n               dt-instance=\"tableInstance\">\n        </table>\n        <!--End table -->\n      </div>\n    </div>\n  </div>\n\n  <!-- Start adding table row modal -->\n  <div class=\"modal fade\" id=\"{{settings.name}}NewRowModal\" tabindex=\"-1\" role=\"dialog\"\n       aria-labelledby=\"{{settings.name}}NewModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\" id=\"{{settings.name}}NewModalLabel\">Добавление</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form id=\"{{settings.name}}-adding-new-row-form\" class=\"smart-form\" ng-submit=\"addNewRow()\">\n            <fieldset>\n              <div ng-repeat=\"col in settings.columns track by $index\" ng-if=\"!col.readOnly\">\n                <!-- Text -->\n                <section class=\"col form-input\" ng-if=\"!col.editorType || col.editorType==\'text\'\">\n                  <label class=\"input\">{{col.title}}\n                    <input type=\"text\" id=\"{{settings.name}}{{col.dataField}}Text\" placeholder=\"{{col.title}}\"\n                           ng-model=\"newData[col.dataField]\"\n                           ng-required=\"col.required\"\n                           ng-pattern=\"col.pattern\">\n                  </label>\n                </section>\n                <!-- End Txt-->\n\n                <!-- Check box -->\n                <section class=\"col form-input active-checkbox\" ng-if=\"col.editorType==\'checkbox\'\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"{{settings.name}}{{col.dataField}}Checkbox\"\n                           ng-model=\"newData[col.dataField]\"\n                           ng-required=\"col.required\"\n                           ng-pattern=\"col.pattern\">\n                    <i></i>{{col.title}}</label>\n                </section>\n                <!-- End Check box -->\n\n                <!-- Select box-->\n                <section class=\"col form-input\" ng-if=\"col.editorType==\'selectBox\'\">\n                  <label class=\"input\">{{col.title}}\n                    <select class=\"form-control input-sm\" id=\"{{settings.name}}{{col.dataField}}SelectBox\"\n                            ng-model=\"newData[col.dataField]\"\n                            ng-required=\"col.required\">\n                      <option\n                          ng-repeat=\"row in col.editorOptions.dataSource || table[col.editorOptions.dataSourceString] track by row.id\"\n                          value=\"{{row[col.editorOptions.value]}}\"\n                          ng-selected=\"newData[col.dataField]\">\n                        #{{row[col.editorOptions.value]}} ({{row[col.editorOptions.caption]}})\n                      </option>\n                    </select>\n                  </label>\n                </section>\n                <!-- End Select box-->\n\n                <!-- Number -->\n                <section class=\"col form-input\" ng-if=\"col.editorType==\'number\'\">\n                  <label class=\"input\">{{col.title}}\n                    <input type=\"number\" id=\"{{settings.name}}{{col.dataField}}Number\"\n                           placeholder=\"{{col.placeholder}}\"\n                           ng-model=\"newData[col.dataField]\"\n                           ng-required=\"col.required\"\n                           ng-pattern=\"col.pattern\">\n                  </label>\n                </section>\n                <!-- End number-->\n\n              </div>\n            </fieldset>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Отменить</button>\n          <button type=\"submit\" form=\"{{settings.name}}-adding-new-row-form\" class=\"btn btn-primary\">Добавить</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End adding table row modal -->\n\n  <!-- Start editing table row modal -->\n  <div class=\"modal fade\" id=\"{{settings.name}}EditRowModal\" tabindex=\"-1\" role=\"dialog\"\n       aria-labelledby=\"{{settings.name}}EditModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\" id=\"{{settings.name}}EditModalLabel\">Редактирование</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form id=\"{{settings.name}}-editing-row-form\" class=\"smart-form\"\n                ng-submit=\"editRow(table.selectedRowKeyId, table.editRowData)\">\n            <fieldset>\n              <div ng-repeat=\"col in settings.columns track by $index\" ng-if=\"!col.readOnly\">\n                <!-- Text -->\n                <section class=\"col form-input\" ng-if=\"!col.editorType || col.editorType==\'text\'\">\n                  <label class=\"input\">{{col.title}}\n                    <input type=\"text\" id=\"{{settings.name}}{{col.dataField}}EditText\" placeholder=\"{{col.title}}\"\n                           ng-model=\"table.editRowData[col.dataField]\"\n                           ng-required=\"col.required\"\n                           ng-pattern=\"col.pattern\">\n                  </label>\n                </section>\n                <!-- End Txt-->\n\n                <!-- Check box -->\n                <section class=\"col form-input active-checkbox\" ng-if=\"col.editorType==\'checkbox\'\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"{{settings.name}}{{col.dataField}}EditCheckbox\"\n                           ng-model=\"table.editRowData[col.dataField]\"\n                           ng-required=\"col.required\"\n                           ng-pattern=\"col.pattern\">\n                    <i></i>{{col.title}}</label>\n                </section>\n                <!-- End Check box -->\n\n                <!-- Select box-->\n                <section class=\"col form-input\" ng-if=\"col.editorType==\'selectBox\'\">\n                  <label class=\"input\">{{col.title}}\n                    <select class=\"form-control input-sm\" id=\"{{settings.name}}{{col.dataField}}EditSelectBox\"\n                            ng-model=\"table.editRowData[col.dataField]\"\n                            ng-required=\"col.required\">\n                      <option\n                          ng-repeat=\"row in col.editorOptions.dataSource || table[col.editorOptions.dataSourceString] track by row.id\"\n                          value=\"{{row.id}}\"\n                          ng-selected=\"table.editRowData[col.dataField] == row.id\">\n                        #{{row[col.editorOptions.value]}} ({{row[col.editorOptions.caption]}})\n                      </option>\n                    </select>\n                  </label>\n                </section>\n                <!-- End Select box-->\n\n                <!-- Number -->\n                <section class=\"col form-input\" ng-if=\"col.editorType==\'number\'\">\n                  <label class=\"input\">{{col.title}}\n                    <input type=\"number\" id=\"{{settings.name}}{{col.dataField}}EditNumber\"\n                           placeholder=\"{{col.placeholder}}\"\n                           ng-model=\"table.editRowData[col.dataField]\"\n                           ng-required=\"col.required\"\n                           ng-pattern=\"col.pattern\">\n                  </label>\n                </section>\n                <!-- End number-->\n\n              </div>\n            </fieldset>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Отменить</button>\n          <button type=\"submit\" form=\"{{settings.name}}-editing-row-form\" class=\"btn btn-primary\">Сохранить</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End editing table row modal -->\n\n  <!-- Remove table row modal-->\n  <div class=\"modal fade\" id=\"{{settings.name}}RemoveRowModal\" tabindex=\"-1\" role=\"dialog\"\n       aria-labelledby=\"{{settings.name}}removeRowModal\"\n       aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\" id=\"{{settings.name}}RemoveModalLabel\">Удаление</h4>\n        </div>\n        <div class=\"modal-body\">\n          Вы точно хотите удалить:\n          {{dataList[currentKeyId].name}}\n          (№{{currentKeyId}})\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Отменить</button>\n          <button type=\"button\" class=\"btn btn-danger\"\n                  ng-click=\"removeRow(currentKeyId)\">\n            <i class=\'fa fa-trash-o\'></i>&nbsp; Удалить\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End remove  table row modal-->\n\n</div>");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html","<form id=\"attributeForm\" class=\"form-horizontal\"\n      data-bv-message=\"This value is not valid\"\n      data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n      data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n      data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n\n    <fieldset>\n        <legend>\n            Set validator options via HTML attributes\n        </legend>\n\n        <div class=\"alert alert-warning\">\n            <code>&lt; input\n                data-bv-validatorname\n                data-bv-validatorname-validatoroption=\"...\" / &gt;</code>\n\n            <br>\n            <br>\n            More validator options can be found here:\n            <a href=\"http://bootstrapvalidator.com/validators/\" target=\"_blank\">http://bootstrapvalidator.com/validators/</a>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Full name</label>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The first name is required and cannot be empty\" />\n            </div>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The last name is required and cannot be empty\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Username</label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"username\"\n                       data-bv-message=\"The username is not valid\"\n\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The username is required and cannot be empty\"\n\n                       data-bv-regexp=\"true\"\n                       data-bv-regexp-regexp=\"^[a-zA-Z0-9_\\.]+$\"\n                       data-bv-regexp-message=\"The username can only consist of alphabetical, number, dot and underscore\"\n\n                       data-bv-stringlength=\"true\"\n                       data-bv-stringlength-min=\"6\"\n                       data-bv-stringlength-max=\"30\"\n                       data-bv-stringlength-message=\"The username must be more than 6 and less than 30 characters long\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"password\"\n                       data-bv-different-message=\"The username and password cannot be the same as each other\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Email address</label>\n            <div class=\"col-lg-5\">\n                <input class=\"form-control\" name=\"email\" type=\"email\"\n                       data-bv-emailaddress=\"true\"\n                       data-bv-emailaddress-message=\"The input is not a valid email address\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Password</label>\n            <div class=\"col-lg-5\">\n                <input type=\"password\" class=\"form-control\" name=\"password\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The password is required and cannot be empty\"\n\n                       data-bv-identical=\"true\"\n                       data-bv-identical-field=\"confirmPassword\"\n                       data-bv-identical-message=\"The password and its confirm are not the same\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"username\"\n                       data-bv-different-message=\"The password cannot be the same as username\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Retype password</label>\n            <div class=\"col-lg-5\">\n                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The confirm password is required and cannot be empty\"\n\n                       data-bv-identical=\"true\"\n                       data-bv-identical-field=\"password\"\n                       data-bv-identical-message=\"The password and its confirm are not the same\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"username\"\n                       data-bv-different-message=\"The password cannot be the same as username\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Languages</label>\n            <div class=\"col-lg-5\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"english\"\n                               data-bv-message=\"Please specify at least one language you can speak\"\n                               data-bv-notempty=\"true\" />\n                        English </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"french\" />\n                        French </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"german\" />\n                        German </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"russian\" />\n                        Russian </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"other\" />\n                        Other </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n     ");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html","<form id=\"buttonGroupForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Gender</label>\n            <div class=\"col-lg-9\">\n                <div class=\"btn-group\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"male\" />\n                        Male </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"female\" />\n                        Female </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"other\" />\n                        Other </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Languages</label>\n            <div class=\"col-lg-9\">\n                <div class=\"btn-group\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"english\" />\n                        English </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"german\" />\n                        German </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"french\" />\n                        French </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"russian\" />\n                        Russian </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"italian\">\n                        Italian </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-contact-form.tpl.html","<form id=\"contactForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>Showing messages in custom area</legend>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Full name</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"fullName\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Email</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"email\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Title</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"title\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Content</label>\n            <div class=\"col-md-6\">\n                <textarea class=\"form-control\" name=\"content\" rows=\"5\"></textarea>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <!-- #messages is where the messages are placed inside -->\n        <div class=\"form-group\">\n            <div class=\"col-md-9 col-md-offset-3\">\n                <div id=\"messages\"></div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html","\n<form id=\"movieForm\" method=\"post\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <label class=\"control-label\">Movie title</label>\n                    <input type=\"text\" class=\"form-control\" name=\"title\" />\n                </div>\n\n                <div class=\"col-md-4 selectContainer\">\n                    <label class=\"control-label\">Genre</label>\n                    <select class=\"form-control\" name=\"genre\">\n                        <option value=\"\">Choose a genre</option>\n                        <option value=\"action\">Action</option>\n                        <option value=\"comedy\">Comedy</option>\n                        <option value=\"horror\">Horror</option>\n                        <option value=\"romance\">Romance</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Director</label>\n                    <input type=\"text\" class=\"form-control\" name=\"director\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Writer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"writer\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Producer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"producer\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6\">\n                    <label class=\"control-label\">Website</label>\n                    <input type=\"text\" class=\"form-control\" name=\"website\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-6\">\n                    <label class=\"control-label\">Youtube trailer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"trailer\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"control-label\">Review</label>\n            <textarea class=\"form-control\" name=\"review\" rows=\"8\"></textarea>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <label class=\"control-label\">Rating</label>\n                </div>\n\n                <div class=\"col-sm-12 col-md-10\">\n\n                    <label class=\"radio radio-inline no-margin\">\n                        <input type=\"radio\" name=\"rating\" value=\"terrible\" class=\"radiobox style-2\" />\n                        <span>Terrible</span> </label>\n\n                    <label class=\"radio radio-inline\">\n                        <input type=\"radio\" name=\"rating\" value=\"watchable\" class=\"radiobox style-2\" />\n                        <span>Watchable</span> </label>\n                    <label class=\"radio radio-inline\">\n                        <input type=\"radio\" name=\"rating\" value=\"best\" class=\"radiobox style-2\" />\n                        <span>Best ever</span> </label>\n\n                </div>\n\n            </div>\n\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n\n ");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-product-form.tpl.html","<form id=\"productForm\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Price</label>\n            <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"price\" />\n                    <span class=\"input-group-addon\">$</span>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Amount</label>\n            <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">&#8364;</span>\n                    <input type=\"text\" class=\"form-control\" name=\"amount\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Color</label>\n            <div class=\"col-xs-9 col-lg-6 selectContainer\">\n                <select class=\"form-control\" name=\"color\">\n                    <option value=\"\">Choose a color</option>\n                    <option value=\"blue\">Blue</option>\n                    <option value=\"green\">Green</option>\n                    <option value=\"red\">Red</option>\n                    <option value=\"yellow\">Yellow</option>\n                    <option value=\"white\">White</option>\n                </select>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Size</label>\n            <div class=\"col-xs-9 col-lg-6 selectContainer\">\n                <select class=\"form-control\" name=\"size\">\n                    <option value=\"\">Choose a size</option>\n                    <option value=\"S\">S</option>\n                    <option value=\"M\">M</option>\n                    <option value=\"L\">L</option>\n                    <option value=\"XL\">XL</option>\n                </select>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html","<form id=\"profileForm\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label>Email address</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" />\n        </div>\n    </fieldset>\n    <fieldset>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" />\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-toggling-form.tpl.html","<form id=\"togglingForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Full name <sup>*</sup></label>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\" />\n            </div>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Company <sup>*</sup></label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"company\"\n                       required data-bv-notempty-message=\"The company name is required\" />\n            </div>\n            <div class=\"col-lg-2\">\n                <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"#jobInfo\">\n                    Add more info\n                </button>\n            </div>\n        </div>\n    </fieldset>\n\n    <!-- These fields will not be validated as long as they are not visible -->\n    <div id=\"jobInfo\" style=\"display: none;\">\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Job title <sup>*</sup></label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"job\" />\n                </div>\n            </div>\n        </fieldset>\n\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Department <sup>*</sup></label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"department\" />\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Mobile phone <sup>*</sup></label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"mobilePhone\" />\n            </div>\n            <div class=\"col-lg-2\">\n                <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"#phoneInfo\">\n                    Add more phone numbers\n                </button>\n            </div>\n        </div>\n    </fieldset>\n    <!-- These fields will not be validated as long as they are not visible -->\n    <div id=\"phoneInfo\" style=\"display: none;\">\n\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Home phone</label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"homePhone\" />\n                </div>\n            </div>\n        </fieldset>\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Office phone</label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"officePhone\" />\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>");
$templateCache.put("app/_common/layout/directives/demo/demo-states.tpl.html","<div class=\"demo\"><span id=\"demo-setting\"><i class=\"fa fa-cog txt-color-blueDark\"></i></span>\n\n    <form>\n        <legend class=\"no-padding margin-bottom-10\">Layout Options</legend>\n        <section>\n            <label><input type=\"checkbox\" ng-model=\"fixedHeader\"\n                          class=\"checkbox style-0\"><span>Fixed Header</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedNavigation\"\n                          class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedRibbon\"\n                          class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedPageFooter\"\n                          class=\"checkbox style-0\"><span>Fixed Footer</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"insideContainer\"\n                          class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"rtl\"\n                          class=\"checkbox style-0\"><span>RTL</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"menuOnTop\"\n                          class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"colorblindFriendly\"\n                          class=\"checkbox style-0\"><span>For Colorblind <div\n                    class=\"font-xs text-right\">(experimental)\n            </div></span>\n            </label><span id=\"smart-bgimages\"></span></section>\n        <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\n                ng-click=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n                class=\"fa fa-refresh\"></i> Factory Reset</a></section>\n\n        <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>\n\n\n        <section id=\"smart-styles\">\n            <a ng-repeat=\"skin in skins\" ng-click=\"setSkin(skin)\" class=\"{{skin.class}}\" style=\"{{skin.style}}\"><i ng-if=\"skin.name == $parent.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup ng-if=\"skin.beta\">beta</sup></a>\n        </section>\n    </form>\n</div>");}]);
'use strict';

angular.module('app.home').controller('HomeController', function ($scope, User) {
  User.login({
    email: 'test@test.test',
    password: 'test'
  })
});
"use strict";

angular.module('app').factory('Language', function($http, $log, APP_CONFIG){

	function getLanguage(key, callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/langs/ru.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getLanguages(callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/languages.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		getLang: function(type, callback) {
			getLanguage(type, callback);
		},
		getLanguages:function(callback){
			getLanguages(callback);
		}
	}

});
"use strict";

angular.module('app').controller("LanguagesCtrl",  function LanguagesCtrl($scope, $rootScope, $log, Language){

    $rootScope.lang = {};
    
    Language.getLanguages(function(data){

        $rootScope.currentLanguage = data[0];

        $rootScope.languages = data;

        Language.getLang(data[0].key,function(data){

            $rootScope.lang = data;
        });

    });

    $scope.selectLanguage = function(language){
        $rootScope.currentLanguage = language;
        
        Language.getLang(language.key,function(data){

            $rootScope.lang = data;
            
        });
    }

    $rootScope.getWord = function(key){
        if(angular.isDefined($rootScope.lang[key])){
            return $rootScope.lang[key];
        } 
        else {
            return key;
        }
    }

});
"use strict";

angular.module('app').directive('languageSelector', function(Language){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/layout/language/language-selector.tpl.html",
        scope: true
    }
});
"use strict";

angular.module('app').directive('toggleShortcut', function($log,$timeout) {

	var initDomEvents = function($element){

		var shortcut_dropdown = $('#shortcut');

		$element.on('click',function(){
		
			if (shortcut_dropdown.is(":visible")) {
				shortcut_buttons_hide();
			} else {
				shortcut_buttons_show();
			}

		})

		shortcut_dropdown.find('a').click(function(e) {
			e.preventDefault();
			window.location = $(this).attr('href');
			setTimeout(shortcut_buttons_hide, 300);
		});

		

		// SHORTCUT buttons goes away if mouse is clicked outside of the area
		$(document).mouseup(function(e) {
			if (shortcut_dropdown && !shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target).length === 0) {
				shortcut_buttons_hide();
			}
		});

		// SHORTCUT ANIMATE HIDE
		function shortcut_buttons_hide() {
			shortcut_dropdown.animate({
				height : "hide"
			}, 300, "easeOutCirc");
			$('body').removeClass('shortcut-on');

		}

		// SHORTCUT ANIMATE SHOW
		function shortcut_buttons_show() {
			shortcut_dropdown.animate({
				height : "show"
			}, 200, "easeOutCirc");
			$('body').addClass('shortcut-on');
		}
	}

	var link = function($scope,$element){
		$timeout(function(){
			initDomEvents($element);
		});
	}

	return{
		restrict:'EA',
		link:link
	}
})
'use strict';

angular.module('app.locations')
  .controller('BuildingsController',
    function (streets) {
      var vm = this;

      vm.UI = {
        buildingsTableSettings: {
          name: 'buildingsTable',
          title: 'Здания',
          apiUrl: '/buildings',
          buttons: {
            add: true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              editorType: 'number',
              readOnly: true
            },
            {
              dataField: 'street_id',
              title: 'ID Улицы',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: streets,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'number',
              title: 'Номер',
              required: true
            },
            {
              dataField: 'point',
              title: 'Point',
              required: true
            }
          ]
        }
      };

    });
'use strict';

angular.module('app.locations')
  .controller('CitiesController',
    function (regions) {
      var vm = this;

      vm.UI = {
        citiesTableSettings: {
          name: 'citiesTable',
          title: 'Страны',
          apiUrl: '/cities',
          buttons: {
            add: true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              editorType: 'number',
              readOnly: true
            },
            {
              dataField: 'slug',
              title: 'Slug',
              required: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'name_orig',
              title: 'Оригинальное название',
              required: true
            },
            {
              dataField: 'region_id',
              title: 'ID Региона',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: regions,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'point',
              title: 'Point',
              required: true
            },
            {
              dataField: 'bound',
              title: 'Bound',
              required: true
            },
            {
              dataField: 'active',
              title: 'Активно',
              editorType: 'checkbox'
            }
          ]
        }
      };

    });
'use strict';

angular.module('app.locations')
  .controller('CountriesController',
    function () {
      var vm = this;

      vm.UI = {
        countriesTableSettings: {
          name: 'countriesTable',
          title: 'Страны',
          apiUrl: '/countries',
          buttons: {
            add: true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              editorType: 'number',
              readOnly: true
            },
            {
              dataField: 'code',
              title: 'Код',
              required: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'name_orig',
              title: 'Оригинальное название',
              required: true
            },
            {
              dataField: 'point',
              title: 'Point',
              required: true
            },
            {
              dataField: 'bound',
              title: 'Bound',
              required: true
            },
            {
              dataField: 'active',
              title: 'Активно',
              editorType: 'checkbox'
            }
          ]
        }
      };

    });
'use strict';

angular.module('app.locations')
  .controller('DistrictsController',
    function (cities) {
      var vm = this;

      vm.UI = {
        districtsTableSettings: {
          name: 'districtsTable',
          title: 'Районы',
          apiUrl: '/districts',
          buttons: {
            add: true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              readOnly: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'name_orig',
              title: 'Оригинальное название',
              required: true
            },
            {
              dataField: 'city_id',
              title: 'ID Района',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: cities,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'point',
              title: 'Point',
              required: true
            },
            {
              dataField: 'bound',
              title: 'Bound',
              required: true
            }
          ]
        }
      };

    });
'use strict';

angular.module('app.locations')
  .controller('RegionsController',
    function (countries) {
      var vm = this;

      vm.UI = {
        regionsTableSettings: {
          name: 'regionsTable',
          title: 'Регионы',
          apiUrl: '/regions',
          buttons: {
            add: true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              readOnly: true
            },
            {
              dataField: 'slug',
              title: 'Slug',
              required: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'name_orig',
              title: 'Оригинальное название',
              required: true
            },
            {
              dataField: 'country_id',
              title: 'ID Страны',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: countries,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'point',
              title: 'Point',
              required: true
            },
            {
              dataField: 'bound',
              title: 'Bound',
              required: true
            },
            {
              dataField: 'active',
              title: 'Активно',
              editorType: 'checkbox'
            }
          ]
        }
      };

    });
'use strict';

angular.module('app.locations')
  .controller('StreetsController',
    function (cities,districts) {
      var vm = this;

      vm.UI = {
        streetsTableSettings: {
          name: 'streetsTable',
          title: 'Улицы',
          apiUrl: '/streets',
          buttons: {
            add: +true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              editorType: 'number',
              readOnly: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'name_orig',
              title: 'Оригинальное название',
              required: true
            },
            {
              dataField: 'city_id',
              title: 'ID Города',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: cities,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'district_id',
              title: 'ID Района',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: districts,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'street_type_id',
              title: 'ID Региона',
              editorType: 'number',
              required: true
            },
            {
              dataField: 'point',
              title: 'Point',
              required: true
            },
            {
              dataField: 'bound',
              title: 'Bound',
              required: true
            }
          ]
        }
      };

    });
'use strict';

angular.module('customElements')
  .service('Cities', function ($http, API_VERSION, BaseTableCrud) {

  var _Cities = this;
  var _apiUrl = '/cities';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Cities.list = crud.list;
});
'use strict';

angular.module('customElements')
  .service('Countries', function ($http, API_VERSION, BaseTableCrud) {

  var _Countries = this;
  var _apiUrl = '/countries';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Countries.list = crud.list;
});
'use strict';

angular.module('customElements')
  .service('Districts', function ($http, API_VERSION, BaseTableCrud) {

  var _Districts = this;
  var _apiUrl = '/districts';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Districts.list = crud.list;
});
'use strict';

angular.module('customElements')
  .service('Regions', function ($http, API_VERSION, BaseTableCrud) {

  var _Regions = this;
  var _apiUrl = '/regions';
  var crud = new BaseTableCrud(_apiUrl);

    _Regions.list = crud.list;
});
'use strict';

angular.module('customElements')
  .service('Streets', function ($http, API_VERSION, BaseTableCrud) {

  var _Streets = this;
  var _apiUrl = '/streets';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Streets.list = crud.list;
});
angular.module('customElements')
  .directive('cTable', function ($compile, DTOptionsBuilder, DTColumnBuilder, BaseTableCrud) {
    return {
      restrict: 'A',
      scope: true,
      compile: function compile() {
        return {
          pre: function ($scope, element, attrs) {
            //select isolated scope and controller scope
            var settings = $scope.$parent;

            attrs.cTable.split('.').forEach(function (item) {
              settings = settings[item]
            });
            $scope.settings = settings;
            $scope.scope = $scope;
            
            var crud = new BaseTableCrud(settings.apiUrl);
            $scope.table = {
              dataList: {},
              dataListArray: [],
              selectedRowKeyId: null,
              editRowData: null
            };
            $scope.tableOptions = null;
            $scope.tableColumns = [];
            $scope.tableInstance = null;
            $scope.newData = {active: false};

            //Set table options
            $scope.tableOptions = DTOptionsBuilder
              .fromFnPromise(_dataList)
              .withOption('createdRow', _createdRow)
              .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>t" +
                "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>");

            //Set actions column
            if (settings.buttons.edit || settings.buttons.remove) {
              $scope.tableColumns = [
                DTColumnBuilder.newColumn(null)
                  .withTitle('Действия')
                  .notSortable()
                  .withClass('action-buttons')
                  .renderWith(_actionsHtml)
              ];
            }

            //Set columns
            $scope.settings.columns.forEach(function (col) {
              $scope.tableColumns.push(DTColumnBuilder
                .newColumn(col.dataField)
                .withTitle(col.title));
            });

            /**
             * Refresh table data
             */
            $scope.reloadTableData = function () {
              $scope.tableInstance.changeData(_dataList);
            };

            /**
             * Function will add new row to the table
             */
            $scope.addNewRow = function () {
              if (settings.actions && settings.actions.add) {
                settings.actions.add($scope.newData)
                  .then(function () {
                    $scope.tableInstance.changeData(_dataList);
                    $scope.hideModal(settings.name + 'NewRowModal');
                    $scope.newData = {active: false};
                  })
              } else {
                crud.add($scope.newData)
                  .then(function () {
                    $scope.tableInstance.changeData(_dataList);
                    $scope.hideModal(settings.name + 'NewRowModal');
                    $scope.newData = {active: false};
                  })
              }
            };

            /**
             * Function will edit row from the table
             */
            $scope.editRow = function (id, data) {
              var newData = {};
              for (var field in data) {
                if (data[field] != $scope.table.dataList[id][field]) {
                  newData[field] = data[field];
                }
              }
              if (_.keys(newData).length) {
                if (settings.actions &&  settings.actions.edit) {
                  settings.actions.edit(id, newData)
                    .then(function () {
                      $scope.tableInstance.changeData(_dataList);
                      $scope.hideModal(settings.name + 'EditRowModal');
                    })
                } else {
                  crud.edit(id, newData)
                    .then(function () {
                      $scope.tableInstance.changeData(_dataList);
                      $scope.hideModal(settings.name + 'EditRowModal');
                    })
                }
              }
            };

            /**
             * Function will remove row by key id
             * @param id
             */
            $scope.removeRow = function (id) {
              if (settings.actions &&  settings.actions.remove) {
                settings.actions.remove(id)
                  .then(function () {
                    $scope.tableInstance.changeData(_dataList);
                    $scope.hideModal(settings.name + 'RemoveRowModal');
                  })
              } else {
                crud.remove(id)
                  .then(function () {
                    $scope.tableInstance.changeData(_dataList);
                    $scope.hideModal(settings.name + 'RemoveRowModal');
                  })
              }
            };

            /**
             * The function hides the modal window
             * @param id
             */
            $scope.hideModal = function (id) {
              angular.element('#' + id).modal('hide');
            };

            /**
             * Function set currentKeyId
             * @param val Value for set
             */
            $scope.setCurrentKeyId = function (val) {
              $scope.currentKeyId = val;
            };

            /**
             * Function set current data for editing
             * @param id Id of row key
             */
            $scope.onStartEditing = function (id) {
              $scope.table.selectedRowKeyId = id;
              $scope.table.editRowData = angular.copy($scope.table.dataList[id]);
            };

            //private methods

            /**
             * Function include scope to the row
             * @param row Table row
             * @private
             */
            function _createdRow(row) {
              $compile(angular.element(row).contents())($scope);
            }

            /**
             * Functions generating buttons for edit and delete row
             * @param data Data of the row
             * @returns {string}
             */
            function _actionsHtml(data) {
              $scope.table.dataList[data.id] = data;
              return '<button ng-if="settings.buttons.edit" class="btn btn-warning" data-toggle="modal" ' +
                'data-target="#{{settings.name}}EditRowModal"' +
                'ng-click="onStartEditing(' + data.id + ')" >' +
                '   <i class="fa fa-edit"></i>' +
                '</button>&nbsp;' +
                '<button ng-if="settings.buttons.remove" class="btn btn-danger" data-toggle="modal" ' +
                'data-target="#{{settings.name}}RemoveRowModal" ' +
                'ng-click="setCurrentKeyId(' + data.id + ')" >' +
                '   <i class="fa fa-trash-o"' +
                '</button>';
            }

            /**
             * Function return data list
             * @returns {*}
             * @private
             */
            function _dataList() {
              if (settings.dataSource) {
                return settings.dataSource()
                  .then(function (res) {
                    $scope.table.dataListArray = res;
                    return res;
                  })
              } else {
                return crud.list()
                  .then(function (res) {
                    $scope.table.dataListArray = res;
                    return res;
                  })
              }
            }

          }
        }
      },

      templateUrl: '/admin/app/_common/customElements/templates/table.tpl.html'
    }
  });
'use strict';

angular.module('customElements')
  .factory('BaseTableCrud', function ($http, API_VERSION) {
    return function (apiUrl) {
      var _BaseTableCrud = this;
      var _apiUrl = '/api' + apiUrl;
      var dataList = [];

      /**
       * Function will make request to back-end for returning data list
       * @returns {*}
       */
      function list() {
        return $http.get(_apiUrl)
          .then(function (res) {
            _BaseTableCrud.dataList = res.data;
            return _BaseTableCrud.dataList;
          })
          .catch(function (err) {
            return err;
          })
      }

      /**
       * Function will make request to back-end for returning one element
       * @param id Id from row key
       * @returns {*}
       */
      function one(id) {
        return $http.get(_apiUrl + '/' + encodeURI(id))
          .then(function (res) {
            return res.data;
          })
          .catch(function (err) {
            return err;
          })
      }

      /**
       * Function will make request to back-end for add new row
       * @param data Data for create new row
       * @returns {*}
       */
      function add(data) {
        return $http.post(_apiUrl, data)
          .then(function (res) {
            return res.data;
          })
          .catch(function (err) {
            return err;
          })
      }

      /**
       * Function will make request to back-end for edit data
       * @param id Id from row key
       * @param newData Data for update row data
       * @returns {*}
       */
      function edit(id, newData) {
        return $http.put(_apiUrl + '/' + encodeURI(id), newData)
          .then(function (res) {
            return res.data;
          })
          .catch(function (err) {
            return err;
          })
      }

      /**
       * Function will make request to back-end for remove one category
       * @param id Id from row key
       * @returns {*}
       */
      function remove(id) {
        return $http.delete(_apiUrl + '/' + encodeURI(id))
          .then(function (res) {
            return res.data;
          })
          .catch(function (err) {
            return err;
          })
      }

      _BaseTableCrud.dataList = dataList;

      _BaseTableCrud.one = one;
      _BaseTableCrud.list = list;
      _BaseTableCrud.add = add;
      _BaseTableCrud.edit = edit;
      _BaseTableCrud.remove = remove;
    }
  });
"use strict";

angular.module('SmartAdmin.Layout').directive('fullScreen', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');
            var toggleFullSceen = function(e){
                if (!$body.hasClass("full-screen")) {
                    $body.addClass("full-screen");
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    $body.removeClass("full-screen");
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            };

            element.on('click', toggleFullSceen);

        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('minifyMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
                var $body = $('body');
            var minifyMenu = function() {
                if (!$body.hasClass("menu-on-top")) {
                    $body.toggleClass("minified");
                    $body.removeClass("hidden-menu");
                    $('html').removeClass("hidden-menu-mobile-lock");
                }
            };

            element.on('click', minifyMenu);
        }
    }
})
'use strict';

angular.module('SmartAdmin.Layout').directive('reloadState', function ($rootScope) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('reload-state data-reload-state');
            tElement.on('click', function (e) {
                $rootScope.$state.transitionTo($rootScope.$state.current, $rootScope.$stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                e.preventDefault();
            })
        }
    }
});

"use strict";

angular.module('SmartAdmin.Layout').directive('resetWidgets', function($state){

    return {
        restrict: 'A',
        link: function(scope, element){
            element.on('click', function(){
                $.SmartMessageBox({
                    title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content : "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons : '[No][Yes]'
                }, function(ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });

            });
        }
    }

});

'use strict';

angular.module('SmartAdmin.Layout').directive('searchMobile', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('search-mobile data-search-mobile');

            element.on('click', function (e) {
                $('body').addClass('search-mobile');
                e.preventDefault();
            });

            $('#cancel-search-js').on('click', function (e) {
                $('body').removeClass('search-mobile');
                e.preventDefault();
            });
        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('toggleMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');

            var toggleMenu = function(){
                if (!$body.hasClass("menu-on-top")){
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                }
            };

            element.on('click', toggleMenu);

            scope.$on('requestToggleMenu', function(){
                toggleMenu();
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('bigBreadcrumbs', function () {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
        scope: {
            items: '=',
            icon: '@'
        },
        link: function (scope, element) {
            var first = _.first(scope.items);

            var icon = scope.icon || 'home';
            element.find('h1').append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);
            _.rest(scope.items).forEach(function (item) {
                element.find('h1').append(' <span>> ' + item + '</span>')
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('dismisser', function () {
    return {
        restrict: 'A',
        compile: function (element) {
            element.removeAttr('dismisser data-dissmiser')
            var closer = '<button class="close">&times;</button>';
            element.prepend(closer);
            element.on('click', '>button.close', function(){
                element.fadeOut('fast',function(){ $(this).remove(); });

            })
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('hrefVoid', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.attr('href','#');
            element.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
            })
        }
    }
});
'use strict';

/*
* Directive for toggling a ng-model with a button
* Source: https://gist.github.com/aeife/9374784
*/

angular.module('SmartAdmin.Layout').directive('radioToggle', function ($log) {
    return {
        scope: {
            model: "=ngModel",
            value: "@value"
        },
        link: function(scope, element, attrs) {

            element.parent().on('click', function() {
                scope.model = scope.value;
                scope.$apply();
            });
        }
    }
});
/**
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is
 *
 * detected class is inserted to <tElement>.
 *
 *  (so far this is covering most hand held devices)
 */
'use strict';

angular.module('SmartAdmin.Layout').directive('smartDeviceDetect', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-device-detect data-smart-device-detect');

            var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
            
            tElement.toggleClass('desktop-detected', !isMobile);
            tElement.toggleClass('mobile-detected', isMobile);


        }
    }
});
/**
 *
 * Description: Directive utilizes FastClick library.
 *
 *
 * FastClick is a simple, easy-to-use library for eliminating the
 * 300ms delay between a physical tap and the firing of a click event on mobile browsers.
 * FastClick doesn't attach any listeners on desktop browsers.
 * @link: https://github.com/ftlabs/fastclick
 *
 * On mobile devices 'needsclick' class is attached to <tElement>
 *
 */


'use strict';

angular.module('SmartAdmin.Layout').directive('smartFastClick', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-fast-click data-smart-fast-click');

            FastClick.attach(tElement);

            if(!FastClick.notNeeded())
                tElement.addClass('needsclick')
        }
    }
});

/*'use strict';

angular.module('SmartAdmin.Layout').directive('smartFitAppView', function ($rootScope, SmartCss) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-fit-app-view data-smart-fit-app-view leading-y data-leading-y');

            var leadingY = attributes.leadingY ? parseInt(attributes.leadingY) : 0;

            var selector = attributes.smartFitAppView;

            if(SmartCss.appViewSize && SmartCss.appViewSize.height){
                var height =  SmartCss.appViewSize.height - leadingY < 252 ? 252 :  SmartCss.appViewSize.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            }

            var listenerDestroy = $rootScope.$on('$smartContentResize', function (event, data) {
                var height = data.height - leadingY < 252 ? 252 : data.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            });

            element.on('$destroy', function () {
                listenerDestroy();
                SmartCss.remove(selector, 'height');
            });


        }
    }
});*/

"use strict";

angular.module('SmartAdmin.Layout').directive('smartInclude', function () {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: function (element, attr) {
                return attr.smartInclude;
            },
            compile: function(element){
                element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
            }
        };
    }
);


'use strict';

angular.module('SmartAdmin.Layout').directive('smartLayout', function ($rootScope, $timeout, $interval, $q, SmartCss, APP_CONFIG) {
    
    var _debug = 0;

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    var initialized = false, 
           initializedResolver = $q.defer();
    initializedResolver.promise.then(function () {
        initialized = true;
    });

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body'),
        $navigation ,
        $menu,
        $ribbon,
        $footer,
        $contentAnimContainer;


    (function cacheElements() {
        $navigation = $('#header');
        $menu = $('#left-panel');
        $ribbon = $('#ribbon');
        $footer = $('.page-footer');
        if (_.every([$navigation, $menu, $ribbon, $footer], function ($it) {
            return angular.isNumber($it.height())
        })) {
            initializedResolver.resolve();
        } else {
            $timeout(cacheElements, 100);
        }
    })();

    (function applyConfigSkin(){
        if(APP_CONFIG.smartSkin){
            $body.removeClass(_.pluck(APP_CONFIG.skins, 'name').join(' '));
            $body.addClass(APP_CONFIG.smartSkin);
        }
    })();


    return {
        priority: 2014,
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-layout data-smart-layout');

            var appViewHeight = 0 ,
                appViewWidth = 0,
                calcWidth,
                calcHeight,
                deltaX,
                deltaY;

            var forceResizeTrigger = false;

            function resizeListener() {

//                    full window height appHeight = Math.max($menu.outerHeight() - 10, getDocHeight() - 10);

                var menuHeight = $body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.height() : 0;
                var menuWidth = !$body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.width() + $menu.offset().left : 0;

                var $content = $('#content');
                var contentXPad = $content.outerWidth(true) - $content.width();
                var contentYPad = $content.outerHeight(true) - $content.height();


                calcWidth = $window.width() - menuWidth - contentXPad;
                calcHeight = $window.height() - menuHeight - contentYPad - $navigation.height() - $ribbon.height() - $footer.height();

                deltaX = appViewWidth - calcWidth;
                deltaY = appViewHeight - calcHeight;
                if (Math.abs(deltaX) || Math.abs(deltaY) || forceResizeTrigger) {

                    //console.log('exec', calcWidth, calcHeight);
                    $rootScope.$broadcast('$smartContentResize', {
                        width: calcWidth,
                        height: calcHeight,
                        deltaX: deltaX,
                        deltaY: deltaY
                    });
                    appViewWidth = calcWidth;
                    appViewHeight = calcHeight;
                    forceResizeTrigger = false;
                }
            }


            var looping = false;
            $interval(function () {
                if (looping) loop();
            }, 300);

            var debouncedRun = _.debounce(function () {
                run(300)
            }, 300);

            function run(delay) {
                initializedResolver.promise.then(function () {
                    attachOnResize(delay);
                });
            }

            run(10);

            function detachOnResize() {
                looping = false;
            }

            function attachOnResize(delay) {
                $timeout(function () {
                    looping = true;
                }, delay);
            }

            function loop() {
                $body.toggleClass('mobile-view-activated', $window.width() < 979);

                if ($window.width() < 979)
                    $body.removeClass('minified');

                resizeListener();
            }

            function handleHtmlId(toState) {
                if (toState.data && toState.data.htmlId) $html.attr('id', toState.data.htmlId);
                else $html.removeAttr('id');
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //console.log(1, '$stateChangeStart', event, toState, toParams, fromState, fromParams);

                handleHtmlId(toState);
                detachOnResize();
            });

            // initialized with 1 cause we came here with one $viewContentLoading request
            var viewContentLoading = 1;
            $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
                //console.log(2, '$viewContentLoading', event, viewConfig);
                viewContentLoading++;
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                //console.log(3, '$stateChangeSuccess', event, toState, toParams, fromState, fromParams);
                forceResizeTrigger = true;
            });

            $rootScope.$on('$viewContentLoaded', function (event) {
                //console.log(4, '$viewContentLoaded', event);
                viewContentLoading--;

                if (viewContentLoading == 0 && initialized) {
                    debouncedRun();
                }
            });
        }
    }
});



'use strict';

angular.module('SmartAdmin.Layout').directive('smartPageTitle', function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-page-title data-smart-page-title');

            var defaultTitle = attributes.smartPageTitle;
            var listener = function(event, toState, toParams, fromState, fromParams) {
                var title = defaultTitle;
                if (toState.data && toState.data.title) title = toState.data.title + ' | ' + title;
                // Set asynchronously so page changes before title does
                $timeout(function() {
                    $('html head title').text(title);
                });
            };

            $rootScope.$on('$stateChangeStart', listener);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('smartRouterAnimationWrap', function ($rootScope,$timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-router-animation-wrap data-smart-router-animation-wrap wrap-for data-wrap-for');

            element.addClass('router-animation-container');


            var $loader = $('<div class="router-animation-loader"><i class="fa fa-gear fa-4x fa-spin"></i></div>')
                .css({
                    position: 'absolute',
                    top: 50,
                    left: 10
                }).hide().appendTo(element);


            var animateElementSelector = attributes.wrapFor;
            var viewsToMatch = attributes.smartRouterAnimationWrap.split(/\s/);

            var needRunContentViewAnimEnd = false;
            function contentViewAnimStart() {
                needRunContentViewAnimEnd = true;
                element.css({
                    height: element.height() + 'px',
                    overflow: 'hidden'
                }).addClass('active');
                $loader.fadeIn();

                $(animateElementSelector).addClass('animated faster fadeOutDown');
            }

            function contentViewAnimEnd() {
                if(needRunContentViewAnimEnd){
                    element.css({
                        height: 'auto',
                        overflow: 'visible'
                    }).removeClass('active');
                    

                    $(animateElementSelector).addClass('animated faster fadeInUp');

                    needRunContentViewAnimEnd = false;

                    $timeout(function(){
                        $(animateElementSelector).removeClass('animated');
                    },10);
                }
                $loader.fadeOut();
            }


            var destroyForStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                var isAnimRequired = _.any(viewsToMatch, function(view){
                   return _.has(toState.views, view) || _.has(fromState.views, view);
                });
                if(isAnimRequired){
                    contentViewAnimStart()
                }
            });

            var destroyForEnd = $rootScope.$on('$viewContentLoaded', function (event) {
                contentViewAnimEnd();
            });

            element.on('$destroy', function(){
                destroyForStart();
                destroyForEnd();

            });



        }
    }
});
angular.module('SmartAdmin.Layout').directive('speechRecognition', function ($log) {
	'use strict';

	$.root_ = $('body');
	var root, commands;

    root = window;
    window.appConfig = window.appConfig || {};

	if (appConfig.voice_command) {
		commands = appConfig.commands;
	}


	/*
	 * SMART VOICE
	 * Author: MyOrange | @bootstraphunt
	 * http://www.myorange.ca
	 */

	var SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API


// function
	$.speechApp = (function(speech) {

		speech.start = function() {

			// Add our commands to smartSpeechRecognition
			smartSpeechRecognition.addCommands(commands);

			if (smartSpeechRecognition) {
				// activate plugin
				smartSpeechRecognition.start();
				// add btn class
				$.root_.addClass("voice-command-active");
				// play sound
				$.speechApp.playON();
				// set localStorage when switch is on manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'true');
				}

			} else {
				// if plugin not found
				alert("speech plugin not loaded");
			}

		};
		speech.stop = function() {

			if (smartSpeechRecognition) {
				// deactivate plugin
				smartSpeechRecognition.abort();
				// remove btn class
				$.root_.removeClass("voice-command-active");
				// sound
				$.speechApp.playOFF();
				// del localStorage when switch if off manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'false');
				}
				// remove popover if visible
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			}

		};

		// play sound
		speech.playON = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".mp3");

			//$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playOFF = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playConfirmation = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		return speech;

	})({});



	/*
	 * SPEECH RECOGNITION ENGINE
	 * Copyright (c) 2013 Tal Ater
	 * Modified by MyOrange
	 * All modifications made are hereby copyright (c) 2014 MyOrange
	 */

	(function(undefined) {"use strict";

		// Check browser support
		// This is done as early as possible, to make it as fast as possible for unsupported browsers
		if (!SpeechRecognition) {
			root.smartSpeechRecognition = null;
			return undefined;
		}

		var commandsList = [], recognition, callbacks = {
				start : [],
				error : [],
				end : [],
				result : [],
				resultMatch : [],
				resultNoMatch : [],
				errorNetwork : [],
				errorPermissionBlocked : [],
				errorPermissionDenied : []
			}, autoRestart, lastStartedAt = 0,
		//debugState = false, // decleared in app.appConfig.js
		//appConfig.debugStyle = 'font-weight: bold; color: #00f;', // decleared in app.appConfig.js

		// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
			optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g, commandToRegExp = function(command) {
				command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
					return optional ? match : '([^\\s]+)';
				}).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
				return new RegExp('^' + command + '$', 'i');
			};

		// This method receives an array of callbacks to iterate over, and invokes each of them
		var invokeCallbacks = function(callbacks) {
			callbacks.forEach(function(callback) {
				callback.callback.apply(callback.context);
			});
		};

		var initIfNeeded = function() {
			if (!isInitialized()) {
				root.smartSpeechRecognition.init({}, false);
			}
		};

		var isInitialized = function() {
			return recognition !== undefined;
		};

		root.smartSpeechRecognition = {
			// Initialize smartSpeechRecognition with a list of commands to recognize.
			// e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
			// smartSpeechRecognition understands commands with named variables, splats, and optional words.
			init : function(commands, resetCommands) {

				// resetCommands defaults to true
				if (resetCommands === undefined) {
					resetCommands = true;
				} else {
					resetCommands = !!resetCommands;
				}

				// Abort previous instances of recognition already running
				if (recognition && recognition.abort) {
					recognition.abort();
				}

				// initiate SpeechRecognition
				recognition = new SpeechRecognition();

				// Set the max number of alternative transcripts to try and match with a command
				recognition.maxAlternatives = 5;
				recognition.continuous = true;
				// Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
				recognition.lang = appConfig.voice_command_lang || 'en-US';

				recognition.onstart = function() {
					invokeCallbacks(callbacks.start);
					//debugState
					if (appConfig.debugState) {
						root.console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', appConfig.debugStyle_success);
						root.console.log('Language setting is set to: ' + recognition.lang, appConfig.debugStyle);
					}
					$.root_.removeClass("service-not-allowed");
					$.root_.addClass("service-allowed");
				};

				recognition.onerror = function(event) {
					invokeCallbacks(callbacks.error);
					switch (event.error) {
						case 'network':
							invokeCallbacks(callbacks.errorNetwork);
							break;
						case 'not-allowed':
						case 'service-not-allowed':
							// if permission to use the mic is denied, turn off auto-restart
							autoRestart = false;
							$.root_.removeClass("service-allowed");
							$.root_.addClass("service-not-allowed");
							//debugState
							if (appConfig.debugState) {
								root.console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', appConfig.debugStyle_warning);
							}
							// determine if permission was denied by user or automatically.
							if (new Date().getTime() - lastStartedAt < 200) {
								invokeCallbacks(callbacks.errorPermissionBlocked);
							} else {
								invokeCallbacks(callbacks.errorPermissionDenied);
								//console.log("You need your mic to be active")
							}
							break;
					}
				};

				recognition.onend = function() {
					invokeCallbacks(callbacks.end);
					// smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
					if (autoRestart) {
						// play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
						var timeSinceLastStart = new Date().getTime() - lastStartedAt;
						if (timeSinceLastStart < 1000) {
							setTimeout(root.smartSpeechRecognition.start, 1000 - timeSinceLastStart);
						} else {
							root.smartSpeechRecognition.start();
						}
					}
				};

				recognition.onresult = function(event) {
					invokeCallbacks(callbacks.result);

					var results = event.results[event.resultIndex], commandText;

					// go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
					for (var i = 0; i < results.length; i++) {
						// the text recognized
						commandText = results[i].transcript.trim();
						if (appConfig.debugState) {
							root.console.log('Speech recognized: %c' + commandText, appConfig.debugStyle);
						}

						// try and match recognized text to one of the commands on the list
						for (var j = 0, l = commandsList.length; j < l; j++) {
							var result = commandsList[j].command.exec(commandText);
							if (result) {
								var parameters = result.slice(1);
								if (appConfig.debugState) {
									root.console.log('command matched: %c' + commandsList[j].originalPhrase, appConfig.debugStyle);
									if (parameters.length) {
										root.console.log('with parameters', parameters);
									}
								}
								// execute the matched command
								commandsList[j].callback.apply(this, parameters);
								invokeCallbacks(callbacks.resultMatch);

								// for commands "sound on", "stop" and "mute" do not play sound or display message
								//var myMatchedCommand = commandsList[j].originalPhrase;

								var ignoreCallsFor = ["sound on", "mute", "stop"];

								if (ignoreCallsFor.indexOf(commandsList[j].originalPhrase) < 0) {
									// play sound when match found
									console.log(2);
									$.smallBox({
										title : (commandsList[j].originalPhrase),
										content : "loading...",
										color : "#333",
										sound_file : 'voice_alert',
										timeout : 2000
									});

									if ($('#speech-btn .popover').is(':visible')) {
										$('#speech-btn .popover').fadeOut(250);
									}
								}// end if

								return true;
							}
						} // end for
					}// end for

					invokeCallbacks(callbacks.resultNoMatch);
					//console.log("no match found for: " + commandText)
					$.smallBox({
						title : "Error: <strong>" + ' " ' + commandText + ' " ' + "</strong> no match found!",
						content : "Please speak clearly into the microphone",
						color : "#a90329",
						timeout : 5000,
						icon : "fa fa-microphone"
					});
					if ($('#speech-btn .popover').is(':visible')) {
						$('#speech-btn .popover').fadeOut(250);
					}
					return false;
				};

				// build commands list
				if (resetCommands) {
					commandsList = [];
				}
				if (commands.length) {
					this.addCommands(commands);
				}
			},

			// Start listening (asking for permission first, if needed).
			// Call this after you've initialized smartSpeechRecognition with commands.
			// Receives an optional options object:
			// { autoRestart: true }
			start : function(options) {
				initIfNeeded();
				options = options || {};
				if (options.autoRestart !== undefined) {
					autoRestart = !!options.autoRestart;
				} else {
					autoRestart = true;
				}
				lastStartedAt = new Date().getTime();
				recognition.start();
			},

			// abort the listening session (aka stop)
			abort : function() {
				autoRestart = false;
				if (isInitialized) {
					recognition.abort();
				}
			},

			// Turn on output of debug messages to the console. Ugly, but super-handy!
			debug : function(newState) {
				if (arguments.length > 0) {
					appConfig.debugState = !!newState;
				} else {
					appConfig.debugState = true;
				}
			},

			// Set the language the user will speak in. If not called, defaults to 'en-US'.
			// e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
			setLanguage : function(language) {
				initIfNeeded();
				recognition.lang = language;
			},

			// Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
			addCommands : function(commands) {
				var cb, command;

				initIfNeeded();

				for (var phrase in commands) {
					if (commands.hasOwnProperty(phrase)) {
						cb = root[commands[phrase]] || commands[phrase];
						if ( typeof cb !== 'function') {
							continue;
						}
						//convert command to regex
						command = commandToRegExp(phrase);

						commandsList.push({
							command : command,
							callback : cb,
							originalPhrase : phrase
						});
					}
				}
				if (appConfig.debugState) {
					root.console.log('Commands successfully loaded: %c' + commandsList.length, appConfig.debugStyle);
				}
			},

			// Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
			removeCommands : function(commandsToRemove) {
				if (commandsToRemove === undefined) {
					commandsList = [];
					return;
				}
				commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
				commandsList = commandsList.filter(function(command) {
					for (var i = 0; i < commandsToRemove.length; i++) {
						if (commandsToRemove[i] === command.originalPhrase) {
							return false;
						}
					}
					return true;
				});
			},

			// Lets the user add a callback of one of 9 types:
			// start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
			// Can also optionally receive a context for the callback function as the third argument
			addCallback : function(type, callback, context) {
				if (callbacks[type] === undefined) {
					return;
				}
				var cb = root[callback] || callback;
				if ( typeof cb !== 'function') {
					return;
				}
				callbacks[type].push({
					callback : cb,
					context : context || this
				});
			}
		};

	}).call(this);

	var autoStart = function() {

		smartSpeechRecognition.addCommands(commands);

		if (smartSpeechRecognition) {
			// activate plugin
			smartSpeechRecognition.start();
			// add btn class
			$.root_.addClass("voice-command-active");
			// set localStorage when switch is on manually
			if (appConfig.voice_localStorage) {
				localStorage.setItem('sm-setautovoice', 'true');
			}

		} else {
			// if plugin not found
			alert("speech plugin not loaded");
		}
	}
// if already running with localstorage
	if (SpeechRecognition && appConfig.voice_command && localStorage.getItem('sm-setautovoice') == 'true') {
		autoStart();
	}

// auto start
	if (SpeechRecognition && appConfig.voice_command_auto && appConfig.voice_command) {
		autoStart();
	}


	var link = function(scope, element) {


		if (SpeechRecognition && appConfig.voice_command) {

			// create dynamic modal instance
			var modal = $('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
			// attach to body
			modal.appendTo("body");

			element.on("click", function(e) {

            	if ($.root_.hasClass("voice-command-active")) {
					$.speechApp.stop();
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone-slash');
				} else {
					$.speechApp.start();
					//add popover
					$('#speech-btn .popover').fadeIn(350);
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone')

				}

				e.preventDefault();

            });

			//remove popover
			$(document).mouseup(function(e) {
				if (!$('#speech-btn .popover').is(e.target) && $('#speech-btn .popover').has(e.target).length === 0) {
					$('#speech-btn .popover').fadeOut(250);
				}
			});


			$("#speech-help-btn").on("click", function() {
				commands.help();
			});

		}
		else {
			$("#speech-btn").addClass("display-none");
		}


	}



    return {
        restrict: 'AE',
        link: link
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('stateBreadcrumbs', function ($rootScope, $state) {


    return {
        restrict: 'EA',
        replace: true,
        template: '<ol class="breadcrumb"><li>Home</li></ol>',
        link: function (scope, element) {

            function setBreadcrumbs(breadcrumbs) {
                var html = '<li>Home</li>';
                angular.forEach(breadcrumbs, function (crumb) {
                    html += '<li>' + crumb + '</li>'
                });
                element.html(html)
            }

            function fetchBreadcrumbs(stateName, breadcrunbs) {

                var state = $state.get(stateName);

                if (state && state.data && state.data.title && breadcrunbs.indexOf(state.data.title) == -1) {
                    breadcrunbs.unshift(state.data.title)
                }

                var parentName = stateName.replace(/.?\w+$/, '');
                if (parentName) {
                    return fetchBreadcrumbs(parentName, breadcrunbs);
                } else {
                    return breadcrunbs;
                }
            }

            function processState(state) {
                var breadcrumbs;
                if (state.data && state.data.breadcrumbs) {
                    breadcrumbs = state.data.breadcrumbs;
                } else {
                    breadcrumbs = fetchBreadcrumbs(state.name, []);
                }
                setBreadcrumbs(breadcrumbs);
            }

            processState($state.current);

            $rootScope.$on('$stateChangeStart', function (event, state) {
                processState(state);
            })
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').factory('SmartCss', function ($rootScope, $timeout) {

    var sheet = (function () {
        // Create the <style> tag
        var style = document.createElement("style");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    var _styles = {};


    var SmartCss = {
        writeRule: function(selector){
            SmartCss.deleteRuleFor(selector);
            if(_.has(_styles, selector)){
                var css = selector + '{ ' + _.map(_styles[selector], function(v, k){
                    return  k + ':' +  v + ';'
                }).join(' ') +'}';
                sheet.insertRule(css, _.size(_styles) - 1);
            }
        },
        add: function (selector, property, value, delay) {
            if(!_.has(_styles, selector))
                _styles[selector] = {};

            if(value == undefined || value == null || value == '')
                delete _styles[selector][property];
            else
                _styles[selector][property] = value;


            if(_.keys(_styles[selector]).length == 0)
                delete _styles[selector];

            if(!delay)
                delay = 0;
            $timeout(function(){
                SmartCss.writeRule(selector);
            }, delay);

        },
        remove: function(selector, property, delay){
            SmartCss.add(selector, property, null, delay);
        },
        deleteRuleFor: function (selector) {
            _(sheet.rules).forEach(function (rule, idx) {
                if (rule.selectorText == selector) {
                    sheet.deleteRule(idx);
                }
            });
        },
        appViewSize: null
    };

    $rootScope.$on('$smartContentResize', function (event, data) {
        SmartCss.appViewSize = data;
    });

    return SmartCss;

});




'use strict';

angular.module('SmartAdmin.Layout').factory('lazyScript', function($q, $http){

    var cache = {};

    function isPending(scriptName){
        return (cache.hasOwnProperty(scriptName) && cache[scriptName].promise && cache[scriptName].promise.$$state.pending)
    }

    function isRegistered(scriptName){
        return cache.hasOwnProperty(scriptName)
    }
    function loadScript(scriptName){
        if(!cache[scriptName]){
            cache[scriptName] = $q.defer();
            var el = document.createElement( 'script' );
            el.onload = function(script){
                console.log('script is lazy loaded:', scriptName)
                cache[scriptName].resolve(scriptName);
            };
            el.src = scriptName;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(el, x);
            
        }
        return cache[scriptName].promise;

    }

    function register(scriptName){
        if(isPending(scriptName)){
            return cache[scriptName].promise
        }
        if(isRegistered(scriptName)){
            return $q.resolve(scriptName);
        } else {
            var dfd = $q.defer();

            loadScript(scriptName).then(function(){
                dfd.resolve(scriptName);
            });

            return dfd.promise; 

        }
    }
    return {
        register: function (scripts) {
            
            var dfd = $q.defer();
            var promises = [];
            if (angular.isString(scripts))
                scripts = [scripts];

            angular.forEach(scripts, function(script){
                promises.push(register(script));
            })

            $q.all(promises).then(function(resolves){
                dfd.resolve(resolves);
            })
            return dfd.promise;

        }
    };
});

"use strict";

angular.module('SmartAdmin.UI').directive('smartPopoverHtml', function () {
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            var options = {};
            options.content = attributes.smartPopoverHtml;
            options.placement = attributes.popoverPlacement || 'top';
            options.html = true;
            options.trigger =  attributes.popoverTrigger || 'click';
            options.title =  attributes.popoverTitle || attributes.title;
            element.popover(options)

        }

    };
});


"use strict";

angular.module('SmartAdmin.UI').directive('smartTooltipHtml', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attributes){
                element.tooltip({
                    placement: attributes.tooltipPlacement || 'top',
                    html: true,
                    title: attributes.smartTooltipHtml
                })
            }
        };
    }
);

"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapAttributeForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator();


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapButtonGroupForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                excluded : ':disabled',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    gender : {
                        validators : {
                            notEmpty : {
                                message : 'The gender is required'
                            }
                        }
                    },
                    'languages[]' : {
                        validators : {
                            choice : {
                                min : 1,
                                max : 2,
                                message : 'Please choose 1 - 2 languages you can speak'
                            }
                        }
                    }
                }
            });


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapContactForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-contact-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                container : '#messages',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    fullName : {
                        validators : {
                            notEmpty : {
                                message : 'The full name is required and cannot be empty'
                            }
                        }
                    },
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required and cannot be empty'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    title : {
                        validators : {
                            notEmpty : {
                                message : 'The title is required and cannot be empty'
                            },
                            stringLength : {
                                max : 100,
                                message : 'The title must be less than 100 characters long'
                            }
                        }
                    },
                    content : {
                        validators : {
                            notEmpty : {
                                message : 'The content is required and cannot be empty'
                            },
                            stringLength : {
                                max : 500,
                                message : 'The content must be less than 500 characters long'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapMovieForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    title : {
                        group : '.col-md-8',
                        validators : {
                            notEmpty : {
                                message : 'The title is required'
                            },
                            stringLength : {
                                max : 200,
                                message : 'The title must be less than 200 characters long'
                            }
                        }
                    },
                    genre : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The genre is required'
                            }
                        }
                    },
                    director : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The director name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The director name must be less than 80 characters long'
                            }
                        }
                    },
                    writer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The writer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The writer name must be less than 80 characters long'
                            }
                        }
                    },
                    producer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The producer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The producer name must be less than 80 characters long'
                            }
                        }
                    },
                    website : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The website address is required'
                            },
                            uri : {
                                message : 'The website address is not valid'
                            }
                        }
                    },
                    trailer : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The trailer link is required'
                            },
                            uri : {
                                message : 'The trailer link is not valid'
                            }
                        }
                    },
                    review : {
                        // The group will be set as default (.form-group)
                        validators : {
                            stringLength : {
                                max : 500,
                                message : 'The review must be less than 500 characters long'
                            }
                        }
                    },
                    rating : {
                        // The group will be set as default (.form-group)
                        validators : {
                            notEmpty : {
                                message : 'The rating is required'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProductForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-product-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    price : {
                        validators : {
                            notEmpty : {
                                message : 'The price is required'
                            },
                            numeric : {
                                message : 'The price must be a number'
                            }
                        }
                    },
                    amount : {
                        validators : {
                            notEmpty : {
                                message : 'The amount is required'
                            },
                            numeric : {
                                message : 'The amount must be a number'
                            }
                        }
                    },
                    color : {
                        validators : {
                            notEmpty : {
                                message : 'The color is required'
                            }
                        }
                    },
                    size : {
                        validators : {
                            notEmpty : {
                                message : 'The size is required'
                            }
                        }
                    }
                }
            });
        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProfileForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html',
        link: function(scope, form){
           form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    password : {
                        validators : {
                            notEmpty : {
                                message : 'The password is required'
                            }
                        }
                    }
                }
            });
        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapTogglingForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-toggling-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    firstName : {
                        validators : {
                            notEmpty : {
                                message : 'The first name is required'
                            }
                        }
                    },
                    lastName : {
                        validators : {
                            notEmpty : {
                                message : 'The last name is required'
                            }
                        }
                    },
                    company : {
                        validators : {
                            notEmpty : {
                                message : 'The company name is required'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    job : {
                        validators : {
                            notEmpty : {
                                message : 'The job title is required'
                            }
                        }
                    },
                    department : {
                        validators : {
                            notEmpty : {
                                message : 'The department name is required'
                            }
                        }
                    },
                    mobilePhone : {
                        validators : {
                            notEmpty : {
                                message : 'The mobile phone number is required'
                            },
                            digits : {
                                message : 'The mobile phone number is not valid'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    homePhone : {
                        validators : {
                            digits : {
                                message : 'The home phone number is not valid'
                            }
                        }
                    },
                    officePhone : {
                        validators : {
                            digits : {
                                message : 'The office phone number is not valid'
                            }
                        }
                    }
                }
            }).find('button[data-toggle]').on('click', function() {
                var $target = $($(this).attr('data-toggle'));
                // Show or hide the additional fields
                // They will or will not be validated based on their visibilities
                $target.toggle();
                if (!$target.is(':visible')) {
                    // Enable the submit buttons in case additional fields are not valid
                    form.data('bootstrapValidator').disableSubmitButtons(false);
                }
            });
        }

    }



});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCkEditor', function () {
    return {
        restrict: 'A',
        compile: function ( tElement) {
            tElement.removeAttr('smart-ck-editor data-smart-ck-editor');
            //CKEDITOR.basePath = 'bower_components/ckeditor/';

            CKEDITOR.replace( tElement.attr('name'), { height: '380px', startupFocus : true} );
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDestroySummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-destroy-summernote data-smart-destroy-summernote')
            tElement.on('click', function() {
                angular.element(tAttributes.smartDestroySummernote).destroy();
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartEditSummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-edit-summernote data-smart-edit-summernote');
            tElement.on('click', function(){
                angular.element(tAttributes.smartEditSummernote).summernote({
                    focus : true
                });  
            });
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartMarkdownEditor', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-markdown-editor data-smart-markdown-editor')

            var options = {
                autofocus:false,
                savable:true,
                fullscreen: {
                    enable: false
                }
            };

            if(attributes.height){
                options.height = parseInt(attributes.height);
            }

            element.markdown(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartSummernoteEditor', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-summernote-editor data-smart-summernote-editor');

            var options = {
                focus : true,
                tabsize : 2
            };

            if(tAttributes.height){
                options.height = tAttributes.height;
            }

            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.summernote(options);                
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCheckoutForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
           lazyScript.register('build/vendor.ui.js').then(function(){

               scope.countries = formsCommon.countries;

               form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        fname : {
                            required : true
                        },
                        lname : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        country : {
                            required : true
                        },
                        city : {
                            required : true
                        },
                        code : {
                            required : true,
                            digits : true
                        },
                        address : {
                            required : true
                        },
                        name : {
                            required : true
                        },
                        card : {
                            required : true,
                            creditcard : true
                        },
                        cvv : {
                            required : true,
                            digits : true
                        },
                        month : {
                            required : true
                        },
                        year : {
                            required : true,
                            digits : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        fname : {
                            required : 'Please enter your first name'
                        },
                        lname : {
                            required : 'Please enter your last name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        country : {
                            required : 'Please select your country'
                        },
                        city : {
                            required : 'Please enter your city'
                        },
                        code : {
                            required : 'Please enter code',
                            digits : 'Digits only please'
                        },
                        address : {
                            required : 'Please enter your full address'
                        },
                        name : {
                            required : 'Please enter name on your card'
                        },
                        card : {
                            required : 'Please enter your card number'
                        },
                        cvv : {
                            required : 'Enter CVV2',
                            digits : 'Digits only'
                        },
                        month : {
                            required : 'Select month'
                        },
                        year : {
                            required : 'Enter year',
                            digits : 'Digits only please'
                        }
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCommentForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        url : {
                            url : true
                        },
                        comment : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Enter your name',
                        },
                        email : {
                            required : 'Enter your email address',
                            email : 'Enter a VALID email'
                        },
                        url : {
                            email : 'Enter a VALID url'
                        },
                        comment : {
                            required : 'Please enter your comment'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }

                }, formsCommon.validateOptions));
            });

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartContactsForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        message : {
                            required : true,
                            minlength : 10
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        message : {
                            required : 'Please enter your message'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartOrderForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        interested : {
                            required : true
                        },
                        budget : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        interested : {
                            required : 'Please select interested service'
                        },
                        budget : {
                            required : 'Please select your budget'
                        }
                    },

                }, formsCommon.validateOptions));
            });

        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartRegistrationForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({

                    // Rules for form validation
                    rules: {
                        username: {
                            required: true
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        password: {
                            required: true,
                            minlength: 3,
                            maxlength: 20
                        },
                        passwordConfirm: {
                            required: true,
                            minlength: 3,
                            maxlength: 20,
                            equalTo: '#password'
                        },
                        firstname: {
                            required: true
                        },
                        lastname: {
                            required: true
                        },
                        gender: {
                            required: true
                        },
                        terms: {
                            required: true
                        }
                    },

                    // Messages for form validation
                    messages: {
                        login: {
                            required: 'Please enter your login'
                        },
                        email: {
                            required: 'Please enter your email address',
                            email: 'Please enter a VALID email address'
                        },
                        password: {
                            required: 'Please enter your password'
                        },
                        passwordConfirm: {
                            required: 'Please enter your password one more time',
                            equalTo: 'Please enter the same password as above'
                        },
                        firstname: {
                            required: 'Please select your first name'
                        },
                        lastname: {
                            required: 'Please select your last name'
                        },
                        gender: {
                            required: 'Please select your gender'
                        },
                        terms: {
                            required: 'You must agree with Terms and Conditions'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartReviewForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){

                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        review : {
                            required : true,
                            minlength : 20
                        },
                        quality : {
                            required : true
                        },
                        reliability : {
                            required : true
                        },
                        overall : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
                        },
                        review : {
                            required : 'Please enter your review'
                        },
                        quality : {
                            required : 'Please rate quality of the product'
                        },
                        reliability : {
                            required : 'Please rate reliability of the product'
                        },
                        overall : {
                            required : 'Please rate the product'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartJcrop', function ($q) {
    return {
        restrict: 'A',
        scope: {
            coords: '=',
            options: '=',
            selection: '='
        },
        link: function (scope, element, attributes) {
            var jcropApi, imageWidth, imageHeight, imageLoaded = $q.defer();

            var listeners = {
                onSelectHandlers: [],
                onChangeHandlers: [],
                onSelect: function (c) {
                    angular.forEach(listeners.onSelectHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                },
                onChange: function (c) {
                    angular.forEach(listeners.onChangeHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                }
            };

            if (attributes.coords) {
                var coordsUpdate = function (c) {
                    scope.$apply(function () {
                        scope.coords = c;
                    });
                };
                listeners.onSelectHandlers.push(coordsUpdate);
                listeners.onChangeHandlers.push(coordsUpdate);
            }

            var $previewPane = $(attributes.smartJcropPreview),
                $previewContainer = $previewPane.find('.preview-container'),
                $previewImg = $previewPane.find('img');

            if ($previewPane.length && $previewImg.length) {
                var previewUpdate = function (coords) {
                    if (parseInt(coords.w) > 0) {
                        var rx = $previewContainer.width() / coords.w;
                        var ry = $previewContainer.height() / coords.h;

                        $previewImg.css({
                            width: Math.round(rx * imageWidth) + 'px',
                            height: Math.round(ry * imageHeight) + 'px',
                            marginLeft: '-' + Math.round(rx * coords.x) + 'px',
                            marginTop: '-' + Math.round(ry * coords.y) + 'px'
                        });
                    }
                };
                listeners.onSelectHandlers.push(previewUpdate);
                listeners.onChangeHandlers.push(previewUpdate);
            }


            var options = {
                onSelect: listeners.onSelect,
                onChange: listeners.onChange
            };

            if ($previewContainer.length) {
                options.aspectRatio = $previewContainer.width() / $previewContainer.height()
            }

            if (attributes.selection) {
                scope.$watch('selection', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        var rectangle = newVal == 'release' ? [imageWidth / 2, imageHeight / 2, imageWidth / 2, imageHeight / 2] : newVal;

                        var callback = newVal == 'release' ? function () {
                            jcropApi.release();
                        } : angular.noop;

                        imageLoaded.promise.then(function () {
                            if (scope.options && scope.options.animate) {
                                jcropApi.animateTo(rectangle, callback);
                            } else {
                                jcropApi.setSelect(rectangle);
                            }
                        });
                    }
                });
            }

            if (attributes.options) {

                var optionNames = [
                    'bgOpacity', 'bgColor', 'bgFade', 'shade', 'outerImage',
                    'allowSelect', 'allowMove', 'allowResize',
                    'aspectRatio'
                ];

                angular.forEach(optionNames, function (name) {
                    if (scope.options[name])
                        options[name] = scope.options[name]

                    scope.$watch('options.' + name, function (newVal, oldVal) {
                        if (newVal != oldVal) {
                            imageLoaded.promise.then(function () {
                                var update = {};
                                update[name] = newVal;
                                jcropApi.setOptions(update);
                            });
                        }
                    });

                });


                scope.$watch('options.disabled', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.disable();
                        } else {
                            jcropApi.enable();
                        }
                    }
                });

                scope.$watch('options.destroyed', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.destroy();
                        } else {
                            _init();
                        }
                    }
                });

                scope.$watch('options.src', function (newVal, oldVal) {
                    imageLoaded = $q.defer();
                    if (newVal != oldVal) {
                        jcropApi.setImage(scope.options.src, function () {
                            imageLoaded.resolve();
                        });
                    }
                });

                var updateSize = function(){
                    jcropApi.setOptions({
                        minSize: [scope.options.minSizeWidth, scope.options.minSizeHeight],
                        maxSize: [scope.options.maxSizeWidth, scope.options.maxSizeHeight]
                    });
                };

                scope.$watch('options.minSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.minSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
            }

            var _init = function () {
                element.Jcrop(options, function () {
                    jcropApi = this;
                    // Use the API to get the real image size
                    var bounds = this.getBounds();
                    imageWidth = bounds[0];
                    imageHeight = bounds[1];

                    if (attributes.selection && angular.isArray(scope.selection)) {
                        if (scope.options && scope.options.animate) {
                            jcropApi.animateTo(scope.selection);
                        } else {
                            jcropApi.setSelect(scope.selection);
                        }
                    }
                    imageLoaded.resolve();
                });
            };

            _init()


        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartClockpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-clockpicker data-smart-clockpicker');

            var options = {
                placement: 'top',
                donetext: 'Done'
            }

            tElement.clockpicker(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartColorpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-colorpicker data-smart-colorpicker');


            var aOptions = _.pick(tAttributes, ['']);

            var options = _.extend(aOptions, {});

            tElement.colorpicker(options);
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartDatepicker', function () {
    return {
        restrict: 'A',
        scope: {
            options: '='
        },
        link: function (scope, element, attributes) {

            var onSelectCallbacks = [];
            if (attributes.minRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.minRestrict).datepicker('option', 'minDate', selectedDate);
                });
            }
            if (attributes.maxRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.maxRestrict).datepicker('option', 'maxDate', selectedDate);
                });
            }

            //Let others know about changes to the data field
            onSelectCallbacks.push(function (selectedDate) {
                //CVB - 07/14/2015 - Update the scope with the selected value
                element.triggerHandler("change");

                //CVB - 07/17/2015 - Update Bootstrap Validator
                var form = element.closest('form');

                if(typeof form.bootstrapValidator == 'function')
                    form.bootstrapValidator('revalidateField', element.attr('name'));
            });

            var options = _.extend({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function (selectedDate) {
                    angular.forEach(onSelectCallbacks, function (callback) {
                        callback.call(this, selectedDate)
                    })
                }
            }, scope.options || {});


            if (attributes.numberOfMonths) options.numberOfMonths = parseInt(attributes.numberOfMonths);

            if (attributes.dateFormat) options.dateFormat = attributes.dateFormat;

            if (attributes.defaultDate) options.defaultDate = attributes.defaultDate;

            if (attributes.changeMonth) options.changeMonth = attributes.changeMonth == "true";


            element.datepicker(options)
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDuallistbox', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-duallistbox data-smart-duallistbox');


            var aOptions = _.pick(tAttributes, ['nonSelectedFilter']);

            var options = _.extend(aOptions, {
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false
            });

            tElement.bootstrapDualListbox(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartIonslider', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-ionslider data-smart-ionslider');

        	lazyScript.register('build/vendor.ui.js').then(function(){
            	element.ionRangeSlider();
        	});
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartKnob', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-knob data-smart-knob');

            tElement.knob();
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartMaskedInput', function(lazyScript){
    return {
        restrict: 'A',
        compile: function(tElement, tAttributes){
            tElement.removeAttr('smart-masked-input data-smart-masked-input');

        	lazyScript.register('build/vendor.ui.js').then(function(){

	            var options = {};
	            if(tAttributes.maskPlaceholder) options.placeholder =  tAttributes.maskPlaceholder;
	            tElement.mask(tAttributes.smartMaskedInput, options);
        	})	            
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartNouislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.removeAttr('smart-nouislider data-smart-nouislider');

                tElement.addClass('noUiSlider');

                var options = {
                    range: {
                        min: tAttributes.rangeMin ? parseInt(tAttributes.rangeMin) : 0,
                        max: tAttributes.rangeMax ? parseInt(tAttributes.rangeMax) : 1000
                    },
                    start: $parse(tAttributes.start)()
                };

                if (tAttributes.step) options.step =  parseInt(tAttributes.step);

                if(tAttributes.connect) options.connect = tAttributes.connect == 'true' ? true : tAttributes.connect;

                tElement.noUiSlider(options);

                if(tAttributes.update) tElement.on('slide', function(){
                    $(tAttributes.update).text(JSON.stringify(tElement.val()));
                });                
            })
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSelect2', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.hide().removeAttr('smart-select2 data-smart-select2');
        	lazyScript.register('build/vendor.ui.js').then(function(){
	            element.show().select2();
        	})
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSpinner', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-spinner');

            var options = {};
            if(tAttributes.smartSpinner == 'deicimal'){
                options = {
                    step: 0.01,
                    numberFormat: "n"
                };
            }else if(tAttributes.smartSpinner == 'currency'){
                options = {
                    min: 5,
                    max: 2500,
                    step: 25,
                    start: 1000,
                    numberFormat: "C"
                };
            }

            tElement.spinner(options);
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTagsinput', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-tagsinput data-smart-tagsinput');
            tElement.tagsinput();
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTimepicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-timepicker data-smart-timepicker');
            tElement.timepicker();
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartUislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {

            tElement.removeAttr('smart-uislider data-smart-uislider');

            lazyScript.register('build/vendor.ui.js').then(function(){
			    tElement.bootstrapSlider();

			    $(tElement.data('bootstrapSlider').sliderElem).prepend(tElement);      	
            })

        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartXeditable', function($timeout, $log){

	function link (scope, element, attrs, ngModel) {

        var defaults = {
            // display: function(value, srcData) {
            //     ngModel.$setViewValue(value);
            //     // scope.$apply();
            // }
        };

        var inited = false;

        var initXeditable = function() {

            var options = scope.options || {};
    		var initOptions = angular.extend(defaults, options);

            // $log.log(initOptions);
            element.editable('destroy');
            element.editable(initOptions);
        }

        scope.$watch("options", function(newValue) {

            if(!newValue) {
                return false;
            }

            initXeditable();

            // $log.log("Options changed...");

        }, true);

    }

    return {
    	restrict: 'A',
    	require: "ngModel",
        scope: {
            options: "="
        },
    	link: link 

    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDropzone', function () {
    return function (scope, element, attrs) {
        var config, dropzone;

        config = scope[attrs.smartDropzone];

        // create a Dropzone for the element with the given options
        dropzone = new Dropzone(element[0], config.options);

        // bind the given event handlers
        angular.forEach(config.eventHandlers, function (handler, event) {
            dropzone.on(event, handler);
        });
    };
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartValidateForm', function (formsCommon) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {

            var validateOptions = {
                rules: {},
                messages: {},
                highlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                unhighlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                },
                errorElement: 'span',
                errorClass: 'help-block',
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                }
            };
            form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
                var $input = $(this), fieldName = $input.attr('name');

                validateOptions.rules[fieldName] = {};

                if ($input.data('required') != undefined) {
                    validateOptions.rules[fieldName].required = true;
                }
                if ($input.data('email') != undefined) {
                    validateOptions.rules[fieldName].email = true;
                }

                if ($input.data('maxlength') != undefined) {
                    validateOptions.rules[fieldName].maxlength = $input.data('maxlength');
                }

                if ($input.data('minlength') != undefined) {
                    validateOptions.rules[fieldName].minlength = $input.data('minlength');
                }

                if($input.data('message')){
                    validateOptions.messages[fieldName] = $input.data('message');
                } else {
                    angular.forEach($input.data(), function(value, key){
                        if(key.search(/message/)== 0){
                            if(!validateOptions.messages[fieldName])
                                validateOptions.messages[fieldName] = {};

                            var messageKey = key.toLowerCase().replace(/^message/,'')
                            validateOptions.messages[fieldName][messageKey] = value;
                        }
                    });
                }
            });


            form.validate(validateOptions);

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartFueluxWizard', function () {
    return {
        restrict: 'A',
        scope: {
            smartWizardCallback: '&'
        },
        link: function (scope, element, attributes) {

            var wizard = element.wizard();

            var $form = element.find('form');

            wizard.on('actionclicked.fu.wizard', function(e, data){
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        $form.data('validator').focusInvalid();
                        e.preventDefault();
                    }
                }
            });

            wizard.on('finished.fu.wizard', function (e, data) {
                var formData = {};
                _.each($form.serializeArray(), function(field){
                    formData[field.name] = field.value
                });
                if(typeof scope.smartWizardCallback() === 'function'){
                    scope.smartWizardCallback()(formData)
                }
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartWizard', function () {
    return {
        restrict: 'A',
        scope: {
            'smartWizardCallback': '&'
        },
        link: function (scope, element, attributes) {

            var stepsCount = $('[data-smart-wizard-tab]').length;

            var currentStep = 1;

            var validSteps = [];

            var $form = element.closest('form');

            var $prev = $('[data-smart-wizard-prev]', element);

            var $next = $('[data-smart-wizard-next]', element);

            function setStep(step) {
                currentStep = step;
                $('[data-smart-wizard-pane=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-pane]').removeClass('active');
                $('[data-smart-wizard-tab=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-tab]').removeClass('active');

                $prev.toggleClass('disabled', step == 1)
            }


            element.on('click', '[data-smart-wizard-tab]', function (e) {
                setStep(parseInt($(this).data('smartWizardTab')));
                e.preventDefault();
            });

            $next.on('click', function (e) {
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        validSteps = _.without(validSteps, currentStep);
                        $form.data('validator').focusInvalid();
                        return false;
                    } else {
                        validSteps = _.without(validSteps, currentStep);
                        validSteps.push(currentStep);
                        element.find('[data-smart-wizard-tab=' + currentStep + ']')
                            .addClass('complete')
                            .find('.step')
                            .html('<i class="fa fa-check"></i>');
                    }
                }
                if (currentStep < stepsCount) {
                    setStep(currentStep + 1);
                } else {
                    if (validSteps.length < stepsCount) {
                        var steps = _.range(1, stepsCount + 1)

                        _(steps).forEach(function (num) {
                            if (validSteps.indexOf(num) == -1) {
                                console.log(num);
                                setStep(num);
                                return false;
                            }
                        })
                    } else {
                        var data = {};
                        _.each($form.serializeArray(), function(field){
                            data[field.name] = field.value
                        });
                        if(typeof  scope.smartWizardCallback() === 'function'){
                            scope.smartWizardCallback()(data)
                        }
                    }
                }

                e.preventDefault();
            });

            $prev.on('click', function (e) {
                if (!$prev.hasClass('disabled') && currentStep > 0) {
                    setStep(currentStep - 1);
                }
                e.preventDefault();
            });


            setStep(currentStep);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('demoStates', function ($rootScope) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'app/_common/layout/directives/demo/demo-states.tpl.html',
        scope: true,
        link: function (scope, element, attributes) {
            element.parent().css({
                position: 'relative'
            });

            element.on('click', '#demo-setting', function () {
                element.toggleClass('activate')
            })
        },
        controller: function ($scope) {
            var $root = $('body');

            $scope.$watch('fixedHeader', function (fixedHeader) {
                localStorage.setItem('sm-fixed-header', fixedHeader);
                $root.toggleClass('fixed-header', fixedHeader);
                if (fixedHeader == false) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });


            $scope.$watch('fixedNavigation', function (fixedNavigation) {
                localStorage.setItem('sm-fixed-navigation', fixedNavigation);
                $root.toggleClass('fixed-navigation', fixedNavigation);
                if (fixedNavigation) {
                    $scope.insideContainer = false;
                    $scope.fixedHeader = true;
                } else {
                    $scope.fixedRibbon = false;
                }
            });


            $scope.$watch('fixedRibbon', function (fixedRibbon) {
                localStorage.setItem('sm-fixed-ribbon', fixedRibbon);
                $root.toggleClass('fixed-ribbon', fixedRibbon);
                if (fixedRibbon) {
                    $scope.fixedHeader = true;
                    $scope.fixedNavigation = true;
                    $scope.insideContainer = false;
                }
            });

            $scope.$watch('fixedPageFooter', function (fixedPageFooter) {
                localStorage.setItem('sm-fixed-page-footer', fixedPageFooter);
                $root.toggleClass('fixed-page-footer', fixedPageFooter);
            });

            $scope.$watch('insideContainer', function (insideContainer) {
                localStorage.setItem('sm-inside-container', insideContainer);
                $root.toggleClass('container', insideContainer);
                if (insideContainer) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });

            $scope.$watch('rtl', function (rtl) {
                localStorage.setItem('sm-rtl', rtl);
                $root.toggleClass('smart-rtl', rtl);
            });

            $scope.$watch('menuOnTop', function (menuOnTop) {
                $rootScope.$broadcast('$smartLayoutMenuOnTop', menuOnTop);
                localStorage.setItem('sm-menu-on-top', menuOnTop);
                $root.toggleClass('menu-on-top', menuOnTop);

                if(menuOnTop)$root.removeClass('minified');
            });

            $scope.$watch('colorblindFriendly', function (colorblindFriendly) {
                localStorage.setItem('sm-colorblind-friendly', colorblindFriendly);
                $root.toggleClass('colorblind-friendly', colorblindFriendly);
            });


            $scope.fixedHeader = localStorage.getItem('sm-fixed-header') == 'true';
            $scope.fixedNavigation = localStorage.getItem('sm-fixed-navigation') == 'true';
            $scope.fixedRibbon = localStorage.getItem('sm-fixed-ribbon') == 'true';
            $scope.fixedPageFooter = localStorage.getItem('sm-fixed-page-footer') == 'true';
            $scope.insideContainer = localStorage.getItem('sm-inside-container') == 'true';
            $scope.rtl = localStorage.getItem('sm-rtl') == 'true';
            $scope.menuOnTop = localStorage.getItem('sm-menu-on-top') == 'true' || $root.hasClass('menu-on-top');
            $scope.colorblindFriendly = localStorage.getItem('sm-colorblind-friendly') == 'true';


            $scope.skins = appConfig.skins;


            $scope.smartSkin = localStorage.getItem('sm-skin') ? localStorage.getItem('sm-skin') : appConfig.smartSkin;

            $scope.setSkin = function (skin) {
                $scope.smartSkin = skin.name;
                $root.removeClass(_.pluck($scope.skins, 'name').join(' '));
                $root.addClass(skin.name);
                localStorage.setItem('sm-skin', skin.name);
                $("#logo img").attr('src', skin.logo);
            };


            if($scope.smartSkin != "smart-style-0"){
                $scope.setSkin(_.find($scope.skins, {name: $scope.smartSkin}))
            }


            $scope.factoryReset = function () {
                $.SmartMessageBox({
                    title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content: "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons: '[No][Yes]'
                }, function (ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });
            }
        }
    }
});
"use strict";

(function ($) {

    $.fn.smartCollapseToggle = function () {

        return this.each(function () {

            var $body = $('body');
            var $this = $(this);

            // only if not  'menu-on-top'
            if ($body.hasClass('menu-on-top')) {


            } else {

                $body.hasClass('mobile-view-activated')

                // toggle open
                $this.toggleClass('open');

                // for minified menu collapse only second level
                if ($body.hasClass('minified')) {
                    if ($this.closest('nav ul ul').length) {
                        $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                        $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                    }
                } else {
                    // toggle expand item
                    $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                    $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                }
            }
        });
    };
})(jQuery);

angular.module('SmartAdmin.Layout').directive('smartMenu', function ($state, $rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var $body = $('body');

            var $collapsible = element.find('li[data-menu-collapse]');

            var bindEvents = function(){
                $collapsible.each(function (idx, li) {
                    var $li = $(li);
                    $li
                        .on('click', '>a', function (e) {

                            // collapse all open siblings
                            $li.siblings('.open').smartCollapseToggle();

                            // toggle element
                            $li.smartCollapseToggle();

                            // add active marker to collapsed element if it has active childs
                            if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                                $li.addClass('active')
                            }

                            e.preventDefault();
                        })
                        .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

                    // initialization toggle
                    if ($li.find('li.active').length) {
                        $li.smartCollapseToggle();
                        $li.find('li.active').parents('li').addClass('active');
                    }
                });
            }
            bindEvents();


            // click on route link
            element.on('click', 'a[data-ui-sref]', function (e) {
                // collapse all siblings to element parents and remove active markers
                $(this)
                    .parents('li').addClass('active')
                    .each(function () {
                        $(this).siblings('li.open').smartCollapseToggle();
                        $(this).siblings('li').removeClass('active')
                    });

                if ($body.hasClass('mobile-view-activated')) {
                    $rootScope.$broadcast('requestToggleMenu');
                }
            });


            scope.$on('$smartLayoutMenuOnTop', function (event, menuOnTop) {
                if (menuOnTop) {
                    $collapsible.filter('.open').smartCollapseToggle();
                }
            });
        }
    }
});
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout').directive('smartMenuItems', function ($http, $rootScope, $compile) {
    return {
        restrict: 'A',
        compile: function (element, attrs) {
            

            function createItem(item, parent, level){
                var li = $('<li />' ,{'ui-sref-active': "active"})
                var a = $('<a />');
                var i = $('<i />');

                li.append(a);

                if(item.sref)
                    a.attr('ui-sref', item.sref);
                if(item.href)
                    a.attr('href', item.href);
                if(item.icon){
                    i.attr('class', 'fa fa-lg fa-fw fa-'+item.icon);
                    a.append(i);
                }
                if(item.title){
                    a.attr('title', item.title);
                    if(level == 1){ 
                        a.append(' <span class="menu-item-parent">' + item.title + '</span>');
                    } else {
                        a.append(' ' + item.title);

                    }
                }

                if(item.items){
                    var ul = $('<ul />');
                    li.append(ul);
                    li.attr('data-menu-collapse', '');
                    _.forEach(item.items, function(child) {
                        createItem(child, ul, level+1);
                    })
                } 

                parent.append(li); 
            }


            $http.get(attrs.smartMenuItems).then(function(res){
                var ul = $('<ul />', {
                    'smart-menu': ''
                })
                _.forEach(res.data.items, function(item) {
                    createItem(item, ul, 1);
                })
                
                var $scope = $rootScope.$new();
                var html = $('<div>').append(ul).html(); 
                var linkingFunction = $compile(html);
                
                var _element = linkingFunction($scope);

                element.replaceWith(_element);                
            })
        }
    }
});
})();
/**
 * Jarvis Widget Directive
 *
 *    colorbutton="false"
 *    editbutton="false"
      togglebutton="false"
       deletebutton="false"
        fullscreenbutton="false"
        custombutton="false"
        collapsed="true"
          sortable="false"
 *
 *
 */
"use strict";

angular.module('SmartAdmin.Layout').directive('jarvisWidget', function($rootScope){
    return {
        restrict: "A",
        compile: function(element, attributes){
            if(element.data('widget-color'))
                element.addClass('jarviswidget-color-' + element.data('widget-color'));


            element.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');

            element.addClass('jarviswidget');
            $rootScope.$emit('jarvisWidgetAdded', element )

        }
    }
});
 "use strict";
 
 angular.module('SmartAdmin.Layout').directive('widgetGrid', function ($rootScope, $compile, $q, $state, $timeout) {

    var jarvisWidgetsDefaults = {
        grid: 'article',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '#deletesettingskey-options',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '#deletepositionkey-options',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        // toggle button
        toggleButton: true,
        toggleClass: 'fa fa-minus | fa fa-plus',
        toggleSpeed: 200,
        onToggle: function () {
        },
        // delete btn
        deleteButton: true,
        deleteMsg: 'Warning: This action cannot be undone!',
        deleteClass: 'fa fa-times',
        deleteSpeed: 200,
        onDelete: function () {
        },
        // edit btn
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'fa fa-cog | fa fa-save',
        editSpeed: 200,
        onEdit: function () {
        },
        // color button
        colorButton: true,
        // full screen
        fullscreenButton: true,
        fullscreenClass: 'fa fa-expand | fa fa-compress',
        fullscreenDiff: 3,
        onFullscreen: function () {
        },
        // custom btn
        customButton: false,
        customClass: 'folder-10 | next-10',
        customStart: function () {
            alert('Hello you, this is a custom button...');
        },
        customEnd: function () {
            alert('bye, till next time...');
        },
        // order
        buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'fa fa-refresh',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () {
        },
        rtl: false, // best not to toggle this!
        onChange: function () {

        },
        onSave: function () {

        },
        ajaxnav: true

    }

    var dispatchedWidgetIds = [];
    var setupWaiting = false;

    var debug = 1;

    var setupWidgets = function (element, widgetIds) {

        if (!setupWaiting) {

            if(_.intersection(widgetIds, dispatchedWidgetIds).length != widgetIds.length){

                dispatchedWidgetIds = _.union(widgetIds, dispatchedWidgetIds);

//                    console.log('setupWidgets', debug++);

                element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
                element.jarvisWidgets(jarvisWidgetsDefaults);
                initDropdowns(widgetIds);
            }

        } else {
            if (!setupWaiting) {
                setupWaiting = true;
                $timeout(function () {
                    setupWaiting = false;
                    setupWidgets(element, widgetIds)
                }, 200);
            }
        }

    };

    var destroyWidgets = function(element, widgetIds){
        element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
        dispatchedWidgetIds = _.xor(dispatchedWidgetIds, widgetIds);
    };

    var initDropdowns = function (widgetIds) {
        angular.forEach(widgetIds, function (wid) {
            $('#' + wid + ' [data-toggle="dropdown"]').each(function () {
                var $parent = $(this).parent();
                // $(this).removeAttr('data-toggle');
                if (!$parent.attr('dropdown')) {
                    $(this).removeAttr('href');
                    $parent.attr('dropdown', '');
                    var compiled = $compile($parent)($parent.scope())
                    $parent.replaceWith(compiled);
                }
            })
        });
    };

    var jarvisWidgetAddedOff,
        $viewContentLoadedOff,
        $stateChangeStartOff;

    return {
        restrict: 'A',
        compile: function(element){

            element.removeAttr('widget-grid data-widget-grid');

            var widgetIds = [];

            $viewContentLoadedOff = $rootScope.$on('$viewContentLoaded', function (event, data) {
                $timeout(function () {
                    setupWidgets(element, widgetIds)
                }, 100);
            });


            $stateChangeStartOff = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    jarvisWidgetAddedOff();
                    $viewContentLoadedOff();
                    $stateChangeStartOff();
                    destroyWidgets(element, widgetIds)
                });

            jarvisWidgetAddedOff = $rootScope.$on('jarvisWidgetAdded', function (event, widget) {
                if (widgetIds.indexOf(widget.attr('id')) == -1) {
                    widgetIds.push(widget.attr('id'));
                    $timeout(function () {
                        setupWidgets(element, widgetIds)
                    }, 100);
                }
//                    console.log('jarvisWidgetAdded', widget.attr('id'));
            });

        }
    }
});
