var app = angular.module("angularBlackbox", []);

app.directive("highlight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                element.addClass(attrs.highlight);
            });
            element.bind("mouseleave", function () {
                element.removeClass(attrs.highlight);
            });
        }
    }
});