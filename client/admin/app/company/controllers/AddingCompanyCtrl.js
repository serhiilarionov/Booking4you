'use strict';

angular.module('app.company').controller('AddingCompanyController', function ($scope, $state, $stateParams, $http,
                                                                              Company, Category, City, Street,
                                                                              Notification, Container) {
  var vm = this;
  vm.companyFilter = {
    name: "",
    cityId: "",
    streetId: "",
    buildingId: ""
  };
  vm.newCompany = {};

  vm.cities = City.find();
  vm.categories = Category.find();

  vm.getStreets = function () {
    vm.streets = Street.find({"filter": {"where": {"cityId": vm.companyFilter.city}}});
  };

  vm.filter = function () {
    var filter = angular.fromJson($stateParams.filter);
    filter || (filter = {where: {}});

    Object.keys(vm.companyFilter).forEach(function (col) {
      if (vm.companyFilter[col]) {
        filter.where[col] = vm.companyFilter[col];
      }
    });

    Company.find({"filter": filter}, function (res) {
      vm.companies = res;
    });
  };

  vm.find = function (value) {
    return _.find(vm.categories, function (category) {
      return category.id == value
    });
  };

  vm.addNewRow = function () {
    vm.newCompany.photo = vm.photo.name;
    Company.create(vm.newCompany)
      .$promise
      .then(function (company) {
        var fd = new FormData();
        fd.append('test', vm.photo);
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
        angular.element('#companyNewRowModal').modal('hide');
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };

  vm.editRow = function () {
    Company.upsert({id: vm.selectedCompany.id}, vm.selectedCompany)
      .$promise
      .then(function () {
        Company.sift(vm.filter, function (res) {
          vm.companies = res.companies;
        });
        angular.element('#companyEditRowModal').modal('hide');
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };
  vm.onStartEditing = function (selectedIndex) {
    vm.selectedCompany = angular.copy(vm.companies[selectedIndex]);
  }
});