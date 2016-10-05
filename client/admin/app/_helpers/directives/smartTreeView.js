'use strict';

angular.module('helpers').directive('smartTreeview', function ($compile, $sce, $timeout) {
    return {
        restrict: 'A',
        scope: {
            'items': '='
        },
        templateUrl: '/admin/app/_helpers/templates/smartTreeView.tpl.html',
        compile: function (element) {
            // Break the recursion loop by removing the contents
            var contents = element.contents().remove();
            var compiledContents;
            return {
                post: function (scope, element) {
                    $timeout(function() {

                        // Compile the contents
                        if (!compiledContents) {
                            compiledContents = $compile(contents);
                        }
                        // Re-add the compiled contents to the element
                        compiledContents(scope, function (clone) {
                            element.append(clone);
                        });
                    });
                }
            };
        }
    };
});