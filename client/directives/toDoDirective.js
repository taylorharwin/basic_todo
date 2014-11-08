angular.module('app.directives', [])

.directive('dothis', function () {

    return {restrict: 'E',
     replace: 'true',
     templateUrl: 'dothis.html',
     scope: {
      contents: '=contents'
     },

     link: function (scope, element) {
      console.log(element);
     }
   };
});
