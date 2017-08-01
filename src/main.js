var app = angular.module("angularBlackbox", []);

app.controller("AppCtrl", function ($scope) {
    $scope.display = function () {
        alert("AppCtrl.display()");
    }
});

app.directive("test", function () {
    return {
        scope: {
            showMessage: "&"
        },
        template: '<button class="btn btn-default" ng-click="showMessage()">send message</button>'
    }
});