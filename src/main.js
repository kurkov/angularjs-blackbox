var app = angular.module("angularBlackbox", []);

app.directive("mydirective", function () {
    return {
        restrict: "C",
        link: function () {
            alert("It works!!!");
        }
    }
});