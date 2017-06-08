var app = angular.module("angularBlackbox", []);

app.directive("mydirective", function () {
    return {
        restrict: "E",
        template: "<div>Hello, this is my custom directive!</div>"
    }
});