'use strict';

angular.module('customElements')
  .factory('Map', function () {
    return function ($scope) {
      var _Map = this;

      /**
       * Function will send request to google maps api, showing map and marker by this points
       * @param name Name of field
       * @param address Search address
       * @param dataType Type of data (newData, editData)
       */
      function findAddress(name, address, dataType) {

        var accessString = (dataType || '') + name;
        $scope.inputMaps[accessString] || ($scope.inputMaps[accessString] = {});

        var map = $scope.inputMaps[accessString];

        map.notFound = false;

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({address: address}, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

            if (map.display) {
              map.display = false;
            }
            $scope.showMap(name, dataType, {
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
      function showMap(name, dataType, mapSettings) {
        mapSettings || (mapSettings = {location: {}});

        var defaultLocation = $scope.table[dataType][name] ? $scope.table[dataType][name] : {
          lat: 47.89701,
          lng: 33.39706
        };

        var accessString = (dataType || '') + name;
        $scope.inputMaps[accessString] || ($scope.inputMaps[accessString] = {});

        var map = $scope.inputMaps[accessString];

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

                $scope.table[dataType][name] = {
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

        $scope.table[dataType][name] = {
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
      
      _Map.findAddress = findAddress;
      _Map.showMap = showMap;
     
    }
  });