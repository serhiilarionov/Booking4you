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
      function edit(newData) {
        return $http.put(_apiUrl + '/' + encodeURI(newData.id), newData)
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
        return $http.delete(_apiUrl + '/' + encodeURI(id.id))
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