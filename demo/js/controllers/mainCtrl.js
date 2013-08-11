(function () {
'use strict';

/**
 * The main controller for the app. 
 */
isbnApp.controller('mainCtrl', function mainCtrl($scope) {
  
  $scope.addISBN = function() {
    console.log('submit');
    console.log($scope.addISBNForm);
    console.log($scope.addISBNForm.$valid);
  };
});

})();