'use strict';

angular.module('app.company').controller('AddingCompanyController', function ($scope, $state, $stateParams, $http,
                                                                              Company, Category, City, Street,
                                                                              Notification) {
  var vm = this;
  vm.companyFilter = {
    name: "",
    cityId: "",
    streetId: "",
    buildingId: ""
  };
  vm.Company = {};
  vm.Company.Add = {};
  vm.Company.Edit = {};
  vm.inputMaps = {};

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
    if(vm.photo) {
      vm.Company.Add.photo = vm.photo.name;
    }
    Company.create(vm.Company.Add)
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
    if(vm.photo) {
      vm.Company.Edit.photo = vm.photo.name;
    }
    Company.upsert({id: vm.Company.Edit.id}, vm.Company.Edit)
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
        angular.element('#companyEditRowModal').modal('hide');
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };
  
  vm.onStartEditing = function (selectedIndex) {
    vm.Company.Edit = angular.copy(vm.companies[selectedIndex]);
  };

  /**
   * Function will send request to google maps api, showing map and marker by this points
   * @param name Name of field
   * @param address Search address
   * @param dataType Type of data (newData, editData)
   */
  vm.findAddress = function(name, address, dataType) {
    var accessString = (dataType || '') + name;
    vm.inputMaps[accessString] || (vm.inputMaps[accessString] = {});

    var map = vm.inputMaps[accessString];

    map.notFound = false;

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: address}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

        if (map.display) {
          map.display = false;
        }
        vm.showMap(name, dataType, {
          location: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          },
          zoom: 8
        });

      } else {
        map.notFound = true;
        map.display = false;
      }
    });
  }

  /**
   * Function show map with static center
   * @param name Name of field
   * @param dataType Type of data (newData, editData)
   * @param [mapSettings] Settings for map
   //  */
  vm.showMap = function(name, dataType, mapSettings) {
    mapSettings || (mapSettings = {location: {}})

    var defaultLocation = vm.Company[dataType][name] ? vm.Company[dataType][name] : {
      lat: 47.89701,
      lng: 33.39706
    };

    var accessString = (dataType || '') + name;
    vm.inputMaps[accessString] || (vm.inputMaps[accessString] = {});

    var map = vm.inputMaps[accessString];

    if (map.display) {
      map.display = false;
    }

    map.map = {
      center: {
        latitude: mapSettings.location.lat || defaultLocation.lat,
        longitude: mapSettings.location.lng || defaultLocation.lng
      },
      zoom: mapSettings.zoom || 8,
      events: {
        click: function (mapModel, eventName, originalEventArgs) {
          $scope.$apply(function () {
            var e = originalEventArgs[0];
            map.marker.coords = {
              latitude: e.latLng.lat(),
              longitude: e.latLng.lng()
            };

            vm.Company[dataType][name] = {
              lat: e.latLng.lat(),
              lng: e.latLng.lng()
            }
          })
        }
      }
    };

    map.options = {scrollwheel: false};
    map.coordsUpdates = 0;
    map.dynamicMoveCtr = 0;

    vm.Company[dataType][name] = {
      lat: mapSettings.location.lat || defaultLocation.lat,
      lng: mapSettings.location.lng || defaultLocation.lng
    };

    map.marker = {
      id: 0,
      coords: {
        latitude: mapSettings.location.lat || defaultLocation.lat,
        longitude: mapSettings.location.lng || defaultLocation.lng
      },
      options: {draggable: true}
    };

    map.display = true;

  }
});