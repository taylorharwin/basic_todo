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

        scope.edit = function(){
          alert('hi');
        };
        scope.delete = function(){
          var toDelete = scope.list[scope.index];
          scope.list.splice(scope.index, 1);
          console.log(toDelete);
        };
        scope.markComplete = function(){
          console.log(scope.list);
        };
     }
   };
});
