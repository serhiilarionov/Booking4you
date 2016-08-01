'use strict';

angular.module('app.company').controller('AddingCompanyController', function ($scope, $state, $stateParams,
                                                                              Company, Category, City, Street,
                                                                              Notification) {
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
    vm.filter = angular.fromJson($stateParams.filter);
    vm.filter || (vm.filter = {where: {}});

    Object.keys(vm.companyFilter).forEach(function (col) {
      if (vm.companyFilter[col]) {
        vm.filter.where[col] = vm.companyFilter[col];
      }
    });

    Company.sift(vm.filter, function(res) {
      vm.companies = res.companies;
    });
  };

  vm.find = function(value) {
    return _.find(vm.categories, function(category) {
      return category.id == value
    });
  };

  vm.addNewRow = function() {
    Company.create(vm.newCompany)
      .$promise
      .then(function() {
        Company.sift(vm.filter, function(res) {
          vm.companies = res.companies;
        });
        angular.element('#companyNewRowModal').modal('hide');
        Notification.success();
      })
      .catch(function(err) {
        Notification.error("Error", err.data.error.message);
      });
  };

  vm.editRow = function() {
    Company.upsert({id: vm.selectedCompany.id}, vm.selectedCompany)
      .$promise
      .then(function() {
        Company.sift(vm.filter, function(res) {
          vm.companies = res.companies;
        });
        angular.element('#companyEditRowModal').modal('hide');
        Notification.success();
      })
      .catch(function(err) {
        Notification.error("Error", err.data.error.message);
      });
  };
  vm.onStartEditing = function(selectedIndex) {
    vm.selectedCompany = angular.copy(vm.companies[selectedIndex]);
  }
});