'use strict';

angular.module('app.company').controller('AddingCompanyController',
  function ($scope, $state, $stateParams, $http, $q, Company, Category, City, Street, District, Notification,
            CompanyDetail, CompanyLocation, CompanyService, FileUploader, SERVER_URL, smartTree) {
    var vm = this;
    vm.SERVER_URL = SERVER_URL;

    vm.newCompany = localStorage.newCompany ? JSON.parse(localStorage.newCompany) : {};
    vm.location = localStorage.location ? JSON.parse(localStorage.location) : {};
    vm.services = localStorage.services ? JSON.parse(localStorage.services) : [];
    vm.detail = localStorage.detail ? JSON.parse(localStorage.detail) : {
      email: [],
      website: [],
      phone: [],
      imageList: []
    };

    vm.inputMaps = {};
    vm.subCategories = [];
    vm.weekDays = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat"
    };
    vm.currentStep = null;
    vm.uploader = new FileUploader();
    
    Category.find({"filter": {"order": "parentId ASC"}}).$promise
      .then(function (categories) {
        vm.categories = categories;
        vm.categorySelected = categories.find(function (category) {
          return category.id == vm.newCompany.categoryId;
        });

        //Recursive creation of category tree
        categories.forEach(function (category) {
          smartTree.create(vm.subCategories, category);
        });
      });

    City.find()
      .$promise
      .then(function (cities) {
        vm.cities = cities;
        vm.citySelected = cities.find(function (city) {
          return city.id == vm.location.cityId;
        });
        vm.getDistricts(vm.citySelected);
      });


    /**
     * Function return all cities by cityId
     */
    vm.getDistricts = function (city) {
      if (!city) {
        delete vm.districtSelected;
      }
      else {
        District.find({"filter": {"where": {"cityId": city.id}}}).$promise
          .then(function (districts) {
            vm.districts = districts;
            vm.districtSelected = vm.districts.find(function (district) {
              return district.id == vm.location.districtId;
            });
            vm.getStreets(vm.districtSelected);
          });
      }
    };

    /**
     * Function return all streets by districtId
     */
    vm.getStreets = function (district) {
      if (!district) {
        delete vm.streetSelected;
      }
      else {
        Street.find({"filter": {"where": {"districtId": district.id}}}).$promise
          .then(function (streets) {
            vm.streets = streets;
            vm.streetSelected = vm.streets.find(function (street) {
              return street.id == vm.location.streetId;
            });
          });
      }
    };

    /**
     * Function for adding detail to company
     * @param key Name of detail field
     */
    vm.AddDetail = function (key) {
      if (vm['new' + key]) {
        var isDuplicate = vm.detail[key].some(function (item) {
          return _.isEqual(item, vm['new' + key])
        });

        if (!isDuplicate) {
          vm.detail[key].push(angular.copy(vm['new' + key]));
        }
      }
    };

    /**
     * Function for adding service to company
     */
    vm.AddService = function () {
      if (vm['newService']) {
        vm['newService'].companyId = vm.newCompany.id;
        vm['newService'].categoryId = vm.newCompany.categoryId;
        vm.services.push(vm['newService']);
      }
    };

    /**
     * Function will send request to google maps api, showing map and marker by this points
     * @param name Name of field
     * @param address Search address
     * @param dataType Type of data (newData, editData)
     */
    vm.findAddress = function (name, address, dataType) {
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
    };

    /**
     * Function show map with static center
     * @param name Name of field
     * @param dataType Type of data (new, edit)
     * @param [mapSettings] Settings for map
     //  */
    vm.showMap = function (name, dataType, mapSettings) {
      mapSettings || (mapSettings = {location: {}});

      var defaultLocation = vm.location[name] ? vm.location[name] : {
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

              vm.location[name] = {
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

      vm.location[name] = {
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

    };

    /**
     * Function for submitting of form on selected tab
     */
    vm.formSubmit = function () {
      var form = $('form[name="addingCompany.smartForm"]');
      if (form.valid()) {
        switch (vm.currentStep) {
          case 1:
          {
            vm.newCompany.categoryId = vm.categorySelected.id;
            if (vm.newCompany.id) {
              Company.upsert({id: vm.newCompany.id}, vm.newCompany)
                .$promise
                .then(function (company) {
                  vm.newCompany.id = vm.detail.companyId = vm.location.companyId = company.id;
                  localStorage.setItem('newCompany', JSON.stringify(vm.newCompany));
                  localStorage.setItem('detail', JSON.stringify(vm.detail));
                  localStorage.setItem('location', JSON.stringify(vm.location));
                  Notification.success();
                })
                .catch(function (err) {
                  Notification.error("Error", err.data.error.message);
                });
            }
            else {
              Company.create(vm.newCompany)
                .$promise
                .then(function (company) {
                  vm.newCompany.id = vm.detail.companyId = vm.location.companyId = company.id;
                  localStorage.setItem('newCompany', JSON.stringify(vm.newCompany));
                  localStorage.setItem('detail', JSON.stringify(vm.detail));
                  localStorage.setItem('location', JSON.stringify(vm.location));
                  Notification.success();
                })
                .catch(function (err) {
                  Notification.error("Error", err.data.error.message);
                });
            }
          }
            break;
          case 2:
          {
            CompanyDetail.upsert({companyId: vm.detail.companyId}, vm.detail)
              .$promise
              .then(function (detail) {
                vm.detail.id = detail.id;
                localStorage.setItem('detail', JSON.stringify(vm.detail));
                Notification.success();
              })
              .catch(function (err) {
                Notification.error("Error", err.data.error.message);
              });
          }
            break;
          case 3:
          {
            vm.newCompany.cityId = vm.citySelected.id;
            vm.newCompany.districtId = vm.districtSelected.id;
            vm.newCompany.streetId = vm.streetSelected.id;

            // CompanyLocation.upsert({companyId: vm.location.companyId}, vm.location)
            vm.newCompany = Object.assign(vm.newCompany, vm.location);
            Company.upsert({id: vm.newCompany.id}, vm.newCompany)
              .$promise
              .then(function (location) {
                vm.location = location;
                localStorage.setItem('location', JSON.stringify(vm.location));
                Notification.success();
              })
              .catch(function (err) {
                Notification.error("Error", err.data.error.message);
              });
          }
            break;
          case 4:
          {
            var fd = new FormData();
            fd.append(vm.newCompany.photo, vm.newCompany.file);

            vm.uploader.queue.forEach(function (one) {
              var exists = _.findIndex(vm.detail.imageList, function (image) {
                return (image === one._file.name);
              });
              if (exists === -1) {
                vm.detail.imageList.push(one._file.name);
                fd.append(one.file.name, one._file);
              }
            });

            fd.append('cityId', parseInt(vm.newCompany.cityId));
            fd.append('categoryId', parseInt(vm.newCompany.categoryId));
            fd.append('companyId', parseInt(vm.newCompany.id));

            $http.post('/api/containers/test/upload', fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined},
              responseType: "arraybuffer"
            })
              .then(function () {
                return Company.upsert({id: vm.newCompany.id}, vm.newCompany)
                  .$promise
              })
              .then(function (company) {
                localStorage.setItem('newCompany', JSON.stringify(company));
                return CompanyDetail.upsert({companyId: vm.detail.companyId}, vm.detail)
                  .$promise
              })
              .then(function (detail) {
                localStorage.setItem('detail', JSON.stringify(detail));
                Notification.success();
              })
              .catch(function (err) {
                Notification.error("Error", err.data.error.message);
              });
          }
            break;
          case 5:
          {
            var promisesCompanyService = [];
            vm.services.forEach(function (service) {
              if (service.id) {
                promisesCompanyService.push(CompanyService.upsert({id: service.id}, service)
                  .$promise)
              }
              else {
                promisesCompanyService.push(CompanyService.create(service)
                  .$promise)
              }
            });
            $q.all(promisesCompanyService)
              .then(function (services) {
                localStorage.setItem('services', JSON.stringify(services));
                Notification.success();
              })
              .catch(function (err) {
                Notification.error("Error", err.data.error.message);
              });
          }
            break;
          case 6:
          {
            vm.subCategoriesList = [];
            vm.subCategories.forEach(function (subCategory) {
              smartTree.flatten(vm.subCategoriesList, subCategory)
            });

            var promises = [];
            vm.subCategoriesList.forEach(function (subcategory) {
              if (subcategory.checked) {
                promises.push(Company.categories.link({
                  id: vm.newCompany.id,
                  fk: subcategory.id
                }, null));
              }
            });
            $q.all(promises)
              .then(function () {
                localStorage.removeItem('services');
                localStorage.removeItem('detail');
                localStorage.removeItem('newCompany');
                localStorage.removeItem('location');
                
                Notification.success();
                $state.go('app.catalog.companies');
              })
              .catch(function (err) {
                Notification.error("Error", err.data.error.message);
              });
          }
            break;
          default:
          {
            console.log('Current step is not defined');
          }
        }
      }
    }
    ;
  }
);