var app = angular.module("angularBlackbox", []);

app.directive("highlight", function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            element.bind("mouseenter", function () {
                element.addClass("alert-info");
            });
            element.bind("mouseleave", function () {
                element.removeClass("alert-info");
            });
        }
    }
});