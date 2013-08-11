/**
 * angular-isbn v0.1.0
 * The MIT License
 * Copyright (c) 2013 Jan Antala
 */

(function () {
  'use strict';

  var isbn = angular.module('ja.isbn', []);

  var ALLOWEDCHARS = /^[ -]*$/;
  var ISBN10WEIGHTS = [10,9,8,7,6,5,4,3,2,1];
  var ISBN13WEIGHTS = [1,3,1,3,1,3,1,3,1,3,1,3,1];

  var checksum = function(arr, weights){
    return arr
      .reduce(function(a, x, i){
        a.push([Number(x), weights[i]]);
        return a;
      }, [])
      .reduce(function(sum, a){
        return sum + a[0] * a[1];
      }, 0);
  };

  // console.log(checksum('8020401059'.split(''), ISBN10WEIGHTS) % 11 === 0);
  // console.log(checksum('9788072038848'.split(''), ISBN13WEIGHTS) % 10 === 0);

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

          if (! ALLOWEDCHARS.test(str)) {
            ctrl.$setValidity('isbn10', false);
            return undefined;
          }

          var isbn = value.replace(/\D/g, '');
          if (isbn && isbn.length === 10 && checksum(isbn.split(''), ISBN10WEIGHTS) % 11 === 0) {
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

          if (! ALLOWEDCHARS.test(str)) {
            ctrl.$setValidity('isbn13', false);
            return undefined;
          }

          var isbn = value.replace(/\D/g, '');
          if (isbn && isbn.length === 13 && checksum(isbn.split(''), ISBN13WEIGHTS) % 10 === 0) {
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