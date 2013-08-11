describe('ja.isbn', function() {

  beforeEach(module('ja.isbn'));

  var rootscope;
  beforeEach(inject(function($rootScope) {
    rootScope = $rootScope;
  }));

  var elm, scope;

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element(
      '<form ng-submit="addISBN()" name="ISBNForm" novalidate>' +
      '  <p>' +
      '    <label>' +
      '      ISBN-10' +
      '      <input type="text" ng-model="isbn.isbn10" name="isbn10" isbn10 placeholder="1-4493-4485-2" />' +
      '    </label>' +
      '  </p>' +
      '  <p>' +
      '    <small class="validation-error" ng-hide="ISBNForm.isbn10.$valid">ISBN-10 is invalid. Try 1-4493-4485-2</small>' +
      '  </p>' +
      '  <p>' +
      '    <label>' +
      '      ISBN-13' +
      '      <input type="text" ng-model="isbn.isbn13" name="isbn13" isbn13 placeholder="978-1-4493-4485-6" />' +
      '    </label>' +
      '  </p>' +
      '  <p>' +
      '    <small class="validation-error" ng-hide="ISBNForm.isbn13.$valid">ISBN-13 is invalid. Try 978-1-4493-4485-6</small>' +
      '  </p>' +
        
      '  <button type="submit" class="button" ng-class="{true: \'\', false: \'alert\'}[ISBNForm.$valid]">Submit</button>' +
      '</form>'
    );

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should be valid', function(){
    expect(scope.ISBNForm.$valid).toBe(true);
  });

  describe('isbn10 directive', function() {

  });

  describe('isbn13 directive', function() {

  });
});