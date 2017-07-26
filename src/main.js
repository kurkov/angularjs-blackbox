var app = angular.module("angularBlackbox", []);

app.controller("TaskManagerCtrl", function ($scope) {
    $scope.taskDone = function (task) {
        alert(task + " - task done!");
    }
});

app.directive("task", function () {
    return {
        restrict: "E",
        scope: {
            done: '&'
        },
        template: '<input type="text" ng-model="task"> ' +
        '{{ task }} ' +
        '<button class="btn btn-default" ng-click="done({task:task})">Done</button>'
    }
});