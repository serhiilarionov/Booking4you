"use strict";


angular.module('app.company', ['ui.router'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.company', {
        abstract: true,
        data: {
          title: 'Company'
        }
      })
      .state('app.company.add', {
        url: '/company/companies?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Add company'
        },
        views: {
          "content@app": {
            controller: 'AddingCompanyController as addingCompany',
            templateUrl: "app/company/views/addingCompany.html"
          }
        }
      })
      .state('app.company.verification', {
        url: '/company/companies/:id/verification?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Verification company'
        },
        resolve: {
          company: function (Company, $stateParams) {
            return Company.findById({id: $stateParams.id})
              .$promise
              .then(function (res) {
                return res;
              });
          },
          companyDetail: function (CompanyDetail, $stateParams) {
            return CompanyDetail.findOne({"filter": {"where": {"companyId": $stateParams.id}}})
              .$promise
              .then(function (detail) {
                return detail
              })
          },
          companyServices: function (CompanyService, $stateParams) {
            return CompanyService.find({"filter": {"where": {"companyId": $stateParams.id}}})
              .$promise
              .then(function (services) {
                return services
              })
          }
        },
        views: {
          "content@app": {
            controller: 'VerificationCompanyController as verificationCompany',
            templateUrl: "app/company/views/verificationCompany.html"
          }
        }
      })
      .state('app.company.companySelect', {
        url: '/company/companies/select?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Company select'
        },
        views: {
          "content@app": {
            controller: 'CompanySelectController as companySelect',
            templateUrl: "app/company/views/companySelect.html"
          }
        }
      })
  });
