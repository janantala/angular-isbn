(function () {
'use strict';

/**
 * The main controller for the app. 
 */
isbnApp.controller('mainCtrl', function mainCtrl($scope) {
  
  $scope.addISBN = function() {
    alert($scope.ISBNForm.$valid ? 'valid' : 'invalid');
  };
});

})();