'use strict';

angular.module('customElements')
  .service('Streets', function ($http, API_VERSION, BaseTableCrud) {

  var _Streets = this;
  var _apiUrl = '/streets';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Streets.list = crud.list;
});