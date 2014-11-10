angular.module('app.services', [])

// A service written to interface with the local storage API.
// Meant to make that behavior modular and testable.
// Injected into MainCtrl and toDoDirective

// Note: localStorage for this app only uses one key: 'list'

.factory('localStorageUtils', function () {
  return {
    writeList: function(listArray){
      var listStr = JSON.stringify(listArray);
      localStorage.setItem('list', listStr);
    },
    readList: function(){
      return localStorage.getItem('list');

    }
  };
});