var app = angular.module("angularBlackbox", []);

app.controller("AppCtrl", function ($scope) {

});

app.directive("panel", function () {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="well" ng-transclude>this is directive panel</div>'
    }
});