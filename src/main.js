var app = angular.module("angularBlackbox", []);

app.directive("collapsible", function () {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: '@'
        },
        template: '<div class="panel panel-default">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" ng-click="triggerCollapsible()">{{title}}</h3>' +
                        '</div>' +
                        '<div class="panel-body" ng-show="isVisible" ng-transclude></div>' +
                    '</div>',
        link: function (scope) {
            scope.isVisible = true;

            scope.triggerCollapsible = function () {
                scope.isVisible = !scope.isVisible;
            }
        }
    }
});