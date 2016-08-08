'use strict';

angular.module('app.company').controller('CompanyDetailsController', function ($scope, $state, $stateParams, $http,
                                                                              Company, Category, City, Street,
                                                                              Notification, CompanyDetail, FileUploader) {
  var vm = this;
  vm.newCompany = {};
  vm.uploader = new FileUploader();
  CompanyDetail.find({"filter": {"where": {"companyId": $stateParams.id}}}, function (res) {
    vm.details = res;
  });
  vm.editRow = function () {
    var fd = new FormData();

    Company.findOne({filter: {where: {id: $stateParams.id}}})
      .$promise
      .then(function (company) {
        vm.uploader.queue.forEach(function (one) {
          var exists = _.findIndex(vm.selectedDetail.imageList, function(image){
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
      .then(function() {
        return CompanyDetail.upsert({companyId: vm.selectedDetail.companyId}, vm.selectedDetail)
          .$promise
      })
      .then(function () {
        CompanyDetail.find({"filter": {"where": {"companyId": $stateParams.id}}}, function (res) {
          vm.details = res;
        });
        angular.element('#companyEditRowModal').modal('hide');
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };
  
  vm.onStartEditing = function (selectedIndex) {
    vm.selectedDetail = angular.copy(vm.details[selectedIndex]);
  };
});