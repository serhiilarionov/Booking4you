'use strict';

angular.module('customElements')
  .service('Districts', function ($http, API_VERSION, BaseTableCrud) {

  var _Districts = this;
  var _apiUrl = '/districts';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Districts.list = crud.list;
});