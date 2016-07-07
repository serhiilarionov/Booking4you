'use strict';

angular.module('customElements')
  .service('Categories', function ($http, API_VERSION, BaseTableCrud) {
    
    var _Categories = this;
    var _apiUrl = '/categories';
    var crud = new BaseTableCrud(_apiUrl);
    
    _Categories.list = crud.list;
});