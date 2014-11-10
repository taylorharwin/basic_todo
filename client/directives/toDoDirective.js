angular.module('app.directives', ['app.services'])

.directive('dothis', function (localStorageUtils) {

    return {restrict: 'E',
     replace: 'true',
     templateUrl: 'dothis.html',
     scope: {
      contents: '=contents',
      index:'@',
      list: '=list',
      trash: '=trash'
     },

     link: function (scope, element) {
        scope.localStorageUtils = localStorageUtils;

        scope.editing = false;

        scope.edit = function(){
          scope.editing = !scope.editing;
          scope.localStorageUtils.writeList(scope.list);
        };
        scope.delete = function(){
          var toDelete = scope.list[scope.index];
          var proceeding = confirm('sure you want do delete ' + '"' + toDelete.task+ ' ?');
          if (proceeding){
            scope.trash.push(toDelete);
            scope.list.splice(scope.index, 1);
            scope.localStorageUtils.writeList(scope.list);

          }
        };
        scope.toggleComplete = function(){
          scope.contents.completion = !scope.contents.completion;
          scope.localStorageUtils.writeList(scope.list);
        };
     }
   };
});
