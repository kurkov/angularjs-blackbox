var app = angular.module("angularBlackbox", []);

// --- long annotation (used with minificators)

app.controller("AppCtrl", ["$http", "$scope", function (a, b) {
    console.log($scope);
}]);

// --- short annotation

// app.controller("AppCtrl", function ($http, $scope) {
//     console.log($scope);
// });

app.directive("testDir", function () {
    return {
        restrict: "E",
        scope: {},
        template: '<div>directive</div>',
        link: function (scope) {
            console.log(scope);
        }
    }
});