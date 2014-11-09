angular.module('app.controllers', ['app.directives'])

.controller('mainCtrl', function mainCtrl($scope) {

    $scope.list = [{task:'run for the hills', priority: 'high', completion:'new'}];

    $scope.newTask = '';
    $scope.newPriority = '';

    $scope.postTodo = function(){
        $scope.list.push({task: $scope.newTask, priority: $scope.newPriority, completion: 'new'});
        $scope.text = '';
    };

});