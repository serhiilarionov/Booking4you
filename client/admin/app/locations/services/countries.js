'use strict';

angular.module('customElements')
  .service('Countries', function ($http, API_VERSION, BaseTableCrud) {

  var _Countries = this;
  var _apiUrl = '/countries';
  var crud = new BaseTableCrud(_apiUrl);
  
  _Countries.list = crud.list;
});