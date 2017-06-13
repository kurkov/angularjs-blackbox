var app = angular.module("angularBlackbox", []);

app.directive("mydirective1", function () {
    return {
        restrict: "A",
        priority: 100,
        link: function () {
            alert("mydirective1 works!!!");
        }
    }
});

app.directive("mydirective2", function () {
    return {
        restrict: "A",
        priority: 200,
        link: function () {
            alert("mydirective2 works!!!");
        }
    }
});