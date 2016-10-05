angular.module('helpers')
  .directive('fileModel', ['$parse', 'fileReader', "SERVER_URL", function ($parse, fileReader, SERVER_URL) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        var nameModel = $parse(attrs.fileNameModel);
        var nameModelSetter = nameModel.assign;
        
        element.bind('change', function () {
          scope.$apply(function () {
            modelSetter(scope, element[0].files[0]);
            nameModelSetter(scope, element[0].files[0].name);
            scope.imageSrc = SERVER_URL + "/storage/loading.png";
            fileReader.readAsDataUrl(element[0].files[0], scope)
              .then(function(result) {
                scope.imageSrc = result;
              });

          });
        });
      }
    };
  }]);