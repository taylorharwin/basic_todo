'use strict';

describe('MainCtrl Test', function () {
  beforeEach(module('toDo'));
  var sampleCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope;
    sampleCtrl = $controller('mainCtrl', {
        $scope: scope
      });
  }));

  it('should have a function that posts a new todo', function () {
    expect(typeof scope.postTodo).toBe('function');
    expect(scope.postTodo()).toEqual({task: '', priority: '', completion: false});
  });

});