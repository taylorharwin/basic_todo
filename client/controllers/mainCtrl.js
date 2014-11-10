angular.module('app.controllers', ['app.directives', 'app.services'])

.controller('mainCtrl', function mainCtrl($scope, localStorageUtils) {

    $scope.localStorageUtils = localStorageUtils;


    //These properties have two-way data binding, so they are updated when a user submits a new task
    $scope.newTask = '';
    $scope.newPriority = '';

    //All newly-created tasks start out incomplete
    $scope.completion = false;

    //function attached to the form submit for to-do creation. tasks get saved to local storage whenever a new one is created
    $scope.postTodo = function(){
      $scope.list.push({task: $scope.newTask, priority: $scope.newPriority, completion: $scope.completion});
      $scope.text = '';
      $scope.localStorageUtils.writeList($scope.list);
      $scope.list = JSON.parse($scope.localStorageUtils.readList());
    };

    //This logic checks whether there are any tasks in local storage (it's been used before); 
    // If not, the app initializes with a generic mock task (it's a new user) 
    // If it has, it initializes with the list contents in local storage
    if ($scope.localStorageUtils.readList() === null){
      $scope.list = [{task:'add tasks, edit and resolve them', priority: 'high', completion: false}];
      $scope.localStorageUtils.writeList($scope.list);
    } else {
      $scope.list = JSON.parse($scope.localStorageUtils.readList());
    }

    // An array of user-deleted tasks. It is not saved in local Storage, so will be lost if a user refreshes browser. 
    // This is intentional.
    // User can restore all deleted tasks at once, but not individually
    // The length of the array is used to display the potential number of tasks to be restored.

    $scope.trash = [];

    //Restores tasks by combining the trash array with the current task list, then saving that list as the new list. 
    //Trash is emptied afterward


    $scope.restoreDeletedTodos = function(){
     $scope.list = $scope.list.concat($scope.trash);
     $scope.trash = [];
     $scope.localStorageUtils.writeList($scope.list);
     console.log($scope.list);
    };

});