'use strict';

describe('Service Test', function () {
  beforeEach(module('app.services'));

  var localStorageUtils;

   beforeEach(inject(function (_localStorageUtils_) {
    localStorageUtils = _localStorageUtils_;
  }));


  it('should have functions that read and write to local Storage', function () {
    expect(typeof localStorageUtils.writeList).toBe('function');
    expect(typeof localStorageUtils.readList).toBe('function');
  });

   it('should write to local storage', function () {
    var testList = [{task: 'run', priority: 'hi', completion: false}]
    localStorageUtils.writeList(testList);
    expect(localStorage.getItem('list')).toEqual(JSON.stringify(testList));
  });

  it('should read from local storage', function () {
    var testList = [{task: 'run', priority: 'hi', completion: false}]
    localStorageUtils.writeList(testList);
    expect(localStorageUtils.readList()).toEqual(JSON.stringify(testList));
  });

});