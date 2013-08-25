'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('owlcalcApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('initial history should be empty', function () {
    expect(scope.history.length).toBe(0);
    expect(scope.initial).toBe(true);
  });

  it('submit pushes into history', function () {
    scope.newline = '1+1';
    scope.submit();
    expect(scope.history.length).toBe(2);
    expect(scope.initial).toBe(false);
  });

  it('input fields text can be deleted', function() {
    scope.newline = '1+1';
    scope.clearinput();
    expect(scope.newline.length).toBe(0);
  });

  it('history can be deleted', function() {
    scope.newline = '1+1';
    scope.submit();
    scope.deletehistory();
    expect(scope.history.length).toBe(0);
  });

});
