angular.module('app.catalog').directive('workTimes', function ($timeout) {
  return {
    scope: {
      workTimes: "=",
      weekDays: '='
    },
    templateUrl: '/admin/app/catalog/templates/workTimes.tpl.html',
    controller: function ($scope) {
      $scope.copyActive = false;

      $scope.lunch = $scope.workTimes[0][0].length > 1 || $scope.workTimes[1][1].length > 1 ||
        $scope.workTimes[2][2].length > 1 || $scope.workTimes[3][3].length > 1 || $scope.workTimes[4][4].length > 1 ||
        $scope.workTimes[5][5].length > 1 || $scope.workTimes[6][6].length > 1;
      
      var workHours = [
        {
          "0": []
        },
        {
          "1": [
            {"s": "09:00", "e": "13:00"},
            {"s": "14:00", "e": "18:00"}
          ]
        },
        {
          "2": [
            {"s": "09:00", "e": "13:00"},
            {"s": "14:00", "e": "18:00"}
          ]
        },
        {
          "3": [
            {"s": "09:00", "e": "13:00"},
            {"s": "14:00", "e": "18:00"}
          ]
        },
        {
          "4": [
            {"s": "09:00", "e": "13:00"},
            {"s": "14:00", "e": "18:00"}
          ]
        },
        {
          "5": [
            {"s": "09:00", "e": "13:00"},
            {"s": "14:00", "e": "18:00"}
          ]
        },
        {
          "6": []
        }
      ];
      $scope.workTimes = $scope.workTimes ? $scope.workTimes : workHours;

      $scope.dayStateChanger = function (dayNumber) {
        if ($scope.workTimes[dayNumber][dayNumber].length) {
          $scope.workTimes[dayNumber][dayNumber] = [];
        } else {
          if ($scope.lunch) {
            $scope.workTimes[dayNumber][dayNumber] = [
              {"s": "09:00", "e": "13:00"},
              {"s": "14:00", "e": "18:00"}
            ]
          } else {
            $scope.workTimes[dayNumber][dayNumber] = [
              {"s": "09:00", "e": "18:00"}
            ]
          }
        }
      };

      $scope.copyActiveChanger = function () {
        var workFroms = $('.work .operationTimeFrom');
        var workTills = $('.work .operationTimeTill');

        var lunchFroms = $('.lunch .operationTimeFrom');
        var lunchTills = $('.lunch .operationTimeTill');

        if ($scope.copyActive) {
          for (var i = 0; i < workFroms.length; i++) {
            workFroms[i].onchange = function (timepicker) {
              $scope.workTimes.forEach(function (elem, index, arr) {
                if (arr[index][index].length) {
                  arr[index][index][0].s = timepicker.currentTarget.value;
                }
              })
            };

            workTills[i].onchange = function (timepicker) {
              $scope.workTimes.forEach(function (elem, index, arr) {
                if (arr[index][index].length) {
                  arr[index][index][1].e = timepicker.currentTarget.value;
                }
              })
            };

            lunchFroms[i].onchange = function (timepicker) {
              $scope.workTimes.forEach(function (elem, index, arr) {
                if (arr[index][index].length) {
                  arr[index][index][0].e = timepicker.currentTarget.value;
                }
              })
            };

            lunchTills[i].onchange = function (timepicker) {
              $scope.workTimes.forEach(function (elem, index, arr) {
                if (arr[index][index].length) {
                  arr[index][index][1].s = timepicker.currentTarget.value;
                }
              })
            };
          }
        }
        else {
          for (var i = 0; i < workFroms.length; i++) {
            workFroms[i].onchange = function (timepicker) {
            };

            workTills[i].onchange = function (timepicker) {
            };

            lunchFroms[i].onchange = function (timepicker) {
            };

            lunchTills[i].onchange = function (timepicker) {
            };
          }
        }
      };

      $scope.lunchChanger = function () {
        if ($scope.lunch) {
          for (var i = 0; i < 6; i++) {
            if ($scope.workTimes[i][i].length) {
              $scope.workTimes[i][i][1] = {"s": "14:00", "e": $scope.workTimes[i][i][0].e};
              $scope.workTimes[i][i][0].e = "13:00";
            }
          }
        }
        else {
          for (var i = 0; i < 6; i++) {
            if ($scope.workTimes[i][i].length) {
              $scope.workTimes[i][i][0].e = $scope.workTimes[i][i][1].e;
              $scope.workTimes[i][i].splice(1, 1);
            }
          }
        }
      };
    },
    link: function (scope, elem, attr, ctrl) {
      $timeout(function() {
        $('.operationTimeFrom, .operationTimeTill').timepicker({
          'timeFormat': 'H:i',
          'step': 60
        });
      }, 0);

    }
  }
});