angular.module('app.directives', [])

.directive('dothis', function () {

    return {restrict: 'E',
     replace: 'true',
     templateUrl: 'dothis.html',
     scope: {
      contents: '=contents',
      index:'@',
      list: '=list'
     },

     link: function (scope, element) {
        console.log(scope.index);

        scope.editing = false;

        scope.edit = function(){
          scope.editing = !scope.editing;
          console.log(scope.editing);
        };
        scope.delete = function(){
          var toDelete = scope.list[scope.index];
          var status = confirm('sure you want do delete ' + '"' + toDelete.task+ ' ?');
          if (status){
            scope.list.splice(scope.index, 1);
            console.log(toDelete);
          }
        };
        scope.toggleComplete = function(){
          scope.contents.completion = !scope.contents.completion;
        };
     }
   };
});
