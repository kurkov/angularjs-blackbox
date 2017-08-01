var app = angular.module("angularBlackbox", []);

app.controller("AppCtrl", function ($scope) {
    $scope.display = function (message) {
        alert(message);
    }
});

app.directive("test", function () {
    return {
        scope: {
            showMessage: "&"
        },
        template: '<input type="text" ng-model="value"><br/>' +
        '<button class="btn btn-default" ng-click="showMessage({message:value})">send message</button>'
    }
});