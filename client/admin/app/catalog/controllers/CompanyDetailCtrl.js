'use strict';

angular.module('app.company').controller('CompanyDetailsController', function ($scope, $state, $stateParams, $http,
                                                                              Company, Category, City, Street,
                                                                              Notification, CompanyDetail, FileUploader) {
  var vm = this;
  vm.newCompany = {};
  vm.uploader = new FileUploader();
  CompanyDetail.find({}, function (res) {
    vm.details = res;
  });
  
  vm.editRow = function () {
    Company.findOne({filter: {where: {id: $stateParams.id}}})
      .$promise
      .then(function (company) {
        var fd = new FormData();
        vm.uploader.queue.forEach(function(one) {
          fd.append(one.file.name, one._file);
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
        vm.filter();
        angular.element('#companyEditRowModal').modal('hide');
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };
  
  vm.onStartEditing = function (selectedIndex) {
    vm.selectedCompany = angular.copy(vm.details[selectedIndex]);
  };
});