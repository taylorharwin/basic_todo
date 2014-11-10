angular.module('app.controllers', ['app.directives', 'app.services'])

.controller('mainCtrl', function mainCtrl($scope, localStorageUtils) {

    $scope.localStorageUtils = localStorageUtils;
    $scope.newTask = '';
    $scope.newPriority = '';
    $scope.completion = false;

    if ($scope.localStorageUtils.readList() === null){
      $scope.list = [{task:'add tasks, edit and resolve them', priority: 'high', completion: false}];
      $scope.localStorageUtils.writeList($scope.list);
    } else {
      $scope.list = JSON.parse($scope.localStorageUtils.readList());
    }

    $scope.trash = [];

    $scope.postTodo = function(){
      $scope.list.push({task: $scope.newTask, priority: $scope.newPriority, completion: $scope.completion});
      $scope.text = '';
      $scope.localStorageUtils.writeList($scope.list);
      $scope.list = JSON.parse($scope.localStorageUtils.readList());
    };

    $scope.restoreDeletedTodos = function(){
     $scope.list = $scope.list.concat($scope.trash);
     $scope.trash = [];
     $scope.localStorageUtils.writeList($scope.list);
     console.log($scope.list);
    };

});