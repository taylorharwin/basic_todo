angular.module('app.controllers', ['app.directives'])

.controller('mainCtrl', function mainCtrl($scope) {


    $scope.newTask = '';
    $scope.newPriority = '';
    $scope.completion = false;

    $scope.list = [{task:'run for the hills', priority: 'high', completion: false}];


    $scope.postTodo = function(){
        $scope.list.push({task: $scope.newTask, priority: $scope.newPriority, completion: $scope.completion});
        $scope.text = '';
    };

});