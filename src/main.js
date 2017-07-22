var app = angular.module("angularBlackbox", []);

app.controller("AppCtrl", function ($scope) {
    $scope.showHelloMessage = function () {
        alert("showHelloMessage");
    };

    $scope.showName = function () {
        alert("showName");
    };
});

app.directive("applyMethod", function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            scope.$apply(attrs.applyMethod);
        });
    }
});