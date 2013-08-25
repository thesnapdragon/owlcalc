'use strict';

angular.module('owlcalcApp').directive('focusInput', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                $timeout(function() {
                    document.getElementById('newline').focus();
                });
            });
        }
    };
});
