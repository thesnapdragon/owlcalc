'use strict';

describe('Directive: focusInput', function () {
  beforeEach(module('owlcalcApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<focus-input></focus-input>');
    element = $compile(element)($rootScope);
    //~ expect(element.text()).toBe('this is the focusInput directive');
  }));
});
