'use strict';

angular.module('owlcalcApp', ['pascalprecht.translate', 'angular-gestures'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en-US', {
        'GREETING': 'Hello, this is OwlCalc!',
        'DESCRIPTION': 'This is a simple calculator, that can calculate just every equations that you typed in!',
        'EXAMPLES': 'Examples',
        'TYPE_HERE': 'Type here',
        'DELETE_HISTORY': 'Delete history',
        'THIS_HELP': 'This help',
        'SWIPE_RIGHT': 'Previous equation',
        'SWIPE_LEFT': 'Next equation',
        'HOLD': 'Edit equation'
    });

    var huTranslation = {
        'GREETING': 'Üdv, ez itt az OwlCalc!',
        'DESCRIPTION': 'Ez egy egyszerű számológép, amely szinte minden egyenletet megold, amit beírsz!',
        'EXAMPLES': 'Példák',
        'TYPE_HERE': 'Írj be egy egyenletet',
        'DELETE_HISTORY': 'Előzmény törlése',
        'THIS_HELP': 'Ezek a példa parancsok',
        'SWIPE_RIGHT': 'Előző egyenlet',
        'SWIPE_LEFT': 'Következő egyenlet',
        'HOLD': 'Egyenlet szerkesztése'
    };
    $translateProvider.translations('hu', huTranslation);
    $translateProvider.translations('hu-HU', huTranslation);

    $translateProvider.preferredLanguage('hu-HU');
}]);
