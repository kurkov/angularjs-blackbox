var app = angular.module("angularBlackbox", []);

app.controller("AppCtrl", function ($scope) {
    $scope.ctrlColor = "green";
});

app.directive("testColor", function () {
    return {
        scope: {
            color: "@"
        },
        template: '<div>{{color}}</div>'
    }
});