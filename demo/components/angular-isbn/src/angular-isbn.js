/**
 * angular-isbn v0.1.0
 * The MIT License
 * Copyright (c) 2013 Jan Antala
 */

(function () {
  'use strict';

  var isbn = angular.module('ja.isbn', []);

  isbn.directive('isbn10', function () {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(value) {

          if (!value || value && value.length === 0) {
            ctrl.$setValidity('isbn10', true);
            return value;
          }

          var str = value.replace(/\d/g, '');
          var allowedCharacters = /^[ -]*$/;

          if (! allowedCharacters.test(str)) {
            ctrl.$setValidity('isbn10', false);
            return undefined;
          }

          var isbn = value.replace(/\D/g, '');
          console.log(isbn);
          if (isbn && isbn.length === 10) {
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


  isbn.directive('isbn13', function () {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(value) {

          if (!value || value && value.length === 0) {
            ctrl.$setValidity('isbn13', true);
            return value;
          }

          var str = value.replace(/\d/g, '');
          var allowedCharacters = /^[ -]*$/;

          if (! allowedCharacters.test(str)) {
            ctrl.$setValidity('isbn13', false);
            return undefined;
          }

          var isbn = value.replace(/\D/g, '');
          console.log(isbn);
          if (isbn && isbn.length === 13) {
            // it is valid
            ctrl.$setValidity('isbn13', true);
            return value;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('isbn13', false);
            return undefined;
          }
        });
      }
    };
  });

})();