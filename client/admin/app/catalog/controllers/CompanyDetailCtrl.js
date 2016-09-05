'use strict';

angular.module('app.company').controller('CompanyDetailsController', ['$scope', '$state', '$stateParams',
  '$http', 'Company', 'Category', 'City', 'Street', '$compile', 'Notification', 'CompanyDetail', 'FileUploader', 'details',
  function ($scope, $state, $stateParams, $http, Company, Category, City, Street, $compile, Notification,
            CompanyDetail, FileUploader, details) {
    var vm = this;
    vm.newPhone = {};
    vm.uploader = new FileUploader();
    vm.details = details;

    vm.weekDays = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat"
    };
    
    vm.addNewImage = function () {
      var fd = new FormData();
      vm.selectedDetail = _.first(vm.details);
      Company.findOne({filter: {where: {id: $stateParams.id}}})
        .$promise
        .then(function (company) {
          vm.uploader.queue.forEach(function (one) {
            var exists = _.findIndex(vm.selectedDetail.imageList, function (image) {
              return (image === one._file.name);
            });
            if (exists === -1) {
              vm.selectedDetail.imageList.push(one._file.name);
              fd.append(one.file.name, one._file);
            }
          });

          fd.append('cityId', parseInt(company.cityId));
          fd.append('categoryId', parseInt(company.categoryId));
          fd.append('companyId', parseInt(company.id));

          return $http.post('/api/containers/test/upload', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            responseType: "arraybuffer"
          })
        })
        .then(function () {
          return CompanyDetail.upsert({companyId: vm.selectedDetail.companyId}, vm.selectedDetail)
            .$promise
        })
        .then(function () {
          CompanyDetail.find({"filter": {"where": {"companyId": $stateParams.id}}}, function (res) {
            vm.details = res;
          });
          angular.element('#companyAddImagesModal').modal('hide');
          Notification.success();
        })
        .catch(function (err) {
          Notification.error("Error", err.data.error.message);
        });
    };

    vm.AddDetail = function (key) {
      if (vm['new' + key]) {
        vm.selectedDetail = _.first(vm.details);
        vm.selectedDetail[key].push(vm['new' + key]);

        CompanyDetail.upsert({companyId: vm.selectedDetail.companyId}, vm.selectedDetail)
          .$promise
          .then(function () {
            CompanyDetail.find({"filter": {"where": {"companyId": $stateParams.id}}}, function (res) {
              vm.details = res;
            });
            (key == "phone") && angular.element('#companyAddPhoneModal').modal('hide');
            Notification.success();
          })
          .catch(function (err) {
            Notification.error("Error", err.data.error.message);
          });
      }
    };

    vm.AddWorkTime = function () {
      vm.selectedDetail = _.first(vm.details);
      CompanyDetail.upsert({companyId: vm.selectedDetail.companyId}, vm.selectedDetail)
        .$promise
        .then(function () {
          CompanyDetail.find({"filter": {"where": {"companyId": $stateParams.id}}}, function (res) {
            vm.details = res;
          });
          angular.element('#companyWorkTimeModal').modal('hide');
          Notification.success();
        })
        .catch(function (err) {
          Notification.error("Error", err.data.error.message);
        });
    }
  }]);