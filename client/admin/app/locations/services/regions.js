'use strict';

angular.module('customElements')
  .service('Regions', function ($http, API_VERSION, BaseTableCrud) {

  var _Regions = this;
  var _apiUrl = '/regions';
  var crud = new BaseTableCrud(_apiUrl);

    _Regions.list = crud.list;
});