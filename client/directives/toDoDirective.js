angular.module('app.directives', ['app.services'])

.directive('dothis', function (localStorageUtils) {

    return {restrict: 'E',
     replace: 'true',
     templateUrl: 'dothis.html',

     //This custom directive represents a single task element. 
     // It inherits from its parent scope a reference to the whole task list, trash list, its place in the list, its contents, and the ability to delete itself
     scope: {
      contents: '=contents',
      index:'@',
      list: '=list',
      trash: '=trash'
     },

     link: function (scope, element) {
        scope.localStorageUtils = localStorageUtils;

        //Controls editable state in UI
        scope.editing = false;

        //Toggles editable state in UI, and saves newly-updated data. 
        // TODO: It might make sense, for optimization, to only write changes that modify prior data
        scope.edit = function(){
          scope.editing = !scope.editing;
          scope.localStorageUtils.writeList(scope.list);
        };

        // Deletes a task by pushing it into trash list, splicing it from current list.
        // It then saves a copy of the new current list.
        scope.delete = function(){
          var toDelete = scope.list[scope.index];
          var proceeding = confirm('sure you want do delete ' + '"' + toDelete.task+ ' ?');
          if (proceeding){
            scope.trash.push(toDelete);
            scope.list.splice(scope.index, 1);
            scope.localStorageUtils.writeList(scope.list);

          }
        };
        //Gets called when a user completes a task, and when a user reopens a task. 
        // It toggles button display in the UI, and saves a new copy of the current list in both cases.
        scope.toggleComplete = function(){
          scope.contents.completion = !scope.contents.completion;
          scope.localStorageUtils.writeList(scope.list);
        };
     }
   };
});
