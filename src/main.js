var app = angular.module("angularBlackbox", []);

app.directive("mydirective", function () {
    return {
        restrict: "M",
        link: function () {
            alert("It works!!!");
        }
    }
});