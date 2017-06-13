var app = angular.module("angularBlackbox", []);

app.directive("mydirective", function () {
    return {
        restrict: "A",
        link: function () {
            alert("It works!!!");
        }
    }
});