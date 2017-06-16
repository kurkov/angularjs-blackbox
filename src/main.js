var app = angular.module("angularBlackbox", []);

app.directive("enter", function () {
    return {
        restrict: "A",
        priority: 100,
        link: function (scope, element) {
            element.bind("mouseenter", function () {
                console.log("Inside!");
            });
        }
    }
});

app.directive("leave", function () {
    return function (scope, element) {
        element.bind("mouseleave", function () {
            console.log("Outside!");
        });
    }
});