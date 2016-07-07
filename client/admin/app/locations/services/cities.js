'use strict';

angular.module('customElements')
  .service('Cities', function ($http, API_VERSION, BaseTableCrud) {

  var _Cities = this;
  var _apiUrl = '/cities';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Cities.list = crud.list;
});