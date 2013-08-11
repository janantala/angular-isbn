/**
 * angular-isbn v0.1.0
 * The MIT License
 * Copyright (c) 2013 Jan Antala
 */

(function () {
  'use strict';

  var isbn = angular.module('ja.isbn', []);


  isbn.directive('isbn10', function ($parse) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(value) {

          var str = value.replace(/\d/g, '');
          var allowedCharacters = /^[ -]*$/;

          if (! allowedCharacters.test(str)) {
            ctrl.$setValidity('isbn10', false);
            return undefined;
          }

          var isbn = value.replace(/\D/g, '');
          console.log(isbn);
          if (isbn && isbn.length == 10) {
            // it is valid
            ctrl.$setValidity('isbn10', true);
            return value;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('isbn10', false);
            return undefined;
          }
        });
      }
    };
  });
})();