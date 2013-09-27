'use strict';

angular.module('owlcalcApp').controller('MainCtrl', ['$scope', '$translate', function ($scope, $translate) {

    var parser = math.parser();
    $scope.history = [];
    $scope.historyPointer = 0;
    $scope.initial = true;
    $scope.newline = '';

    $scope.init = function() {
        var language = window.navigator.userLanguage || window.navigator.language;
        try {
            $translate.uses(language);
        } catch (error) {
            $translate.uses("en-US");
        }
    }

    $scope.submit = function() {
        if ($scope.initial == true) {
            $scope.initial = false;
        }

        if ($scope.newline == 'help') {
            $scope.deletehistory();
            $scope.initial = true;
            $scope.clearinput();
            return;
        }

        $scope.history.push($scope.newline);
        var solution = null;
        try {
            solution = math.format(parser.eval($scope.newline));
        } catch (err) {
            solution = 'error';
        }
        if (typeof solution == 'function') {
            solution = 'function stored';
        }
        $scope.history.push(solution);
        $scope.historyPointer = $scope.history.length;
        $scope.clearinput();

        var content = document.getElementById('content');
        setTimeout(function (){ content.scrollTop = content.scrollHeight; }, 10);
    };

    $scope.selectEquation = function(index) {
        $scope.newline = $scope.history[index];
    };

    $scope.clearinput = function() {
        $scope.newline = '';
        $scope.historyPointer = $scope.history.length;
    };

    $scope.deletehistory = function() {
        $scope.history = [];
        $scope.historyPointer = 0;
    };

    $scope.historyBack = function() {
        if ($scope.historyPointer == 0) return;
        $scope.historyPointer -= 2;
        $scope.newline = $scope.history[$scope.historyPointer];
    };

    $scope.historyForward = function() {
        if ($scope.historyPointer == $scope.history.length) return;
        $scope.historyPointer += 2;
        $scope.newline = $scope.history[$scope.historyPointer];
    };

    $scope.whatIsThis = function(element) {
        switch(element) {
            case 'deleteHistory':
                utils.status.show($translate('DELETE_HISTORY'));
        }
    };

}]);
