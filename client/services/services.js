angular.module('app.services', [])

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