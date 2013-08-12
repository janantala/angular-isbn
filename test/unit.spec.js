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

  it('should be valid by default', function(){
    expect(scope.ISBNForm.isbn10.$valid).toBe(true);
    expect(scope.ISBNForm.isbn13.$valid).toBe(true);
    expect(scope.ISBNForm.$valid).toBe(true);
  });

  describe('isbn10 directive', function() {

    beforeEach(inject(function($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should be invalid - text input', function(){
      scope.ISBNForm.isbn10.$setViewValue('invalid isbn');
      expect(scope.ISBNForm.isbn10.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - invalid isbn number', function(){
      scope.ISBNForm.isbn10.$setViewValue('1234567890');
      expect(scope.ISBNForm.isbn10.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - short input', function(){
      scope.ISBNForm.isbn10.$setViewValue('123');
      expect(scope.ISBNForm.isbn10.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - long input', function(){
      scope.ISBNForm.isbn10.$setViewValue('123456789012345');
      expect(scope.ISBNForm.isbn10.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - string with number input', function(){
      scope.ISBNForm.isbn10.$setViewValue('isbn: 1449344852');
      expect(scope.ISBNForm.isbn10.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be valid - number input', function(){
      scope.ISBNForm.isbn10.$setViewValue('1449344852');
      expect(scope.ISBNForm.isbn10.$valid).toBe(true);
      expect(scope.ISBNForm.$valid).toBe(true);
    });

    it('should be valid - dashed input', function(){
      scope.ISBNForm.isbn10.$setViewValue('1-4493-4485-2');
      expect(scope.ISBNForm.isbn10.$valid).toBe(true);
      expect(scope.ISBNForm.$valid).toBe(true);
    });

    it('should be valid - spaced input', function(){
      scope.ISBNForm.isbn10.$setViewValue('1 4493 4485 2');
      expect(scope.ISBNForm.isbn10.$valid).toBe(true);
      expect(scope.ISBNForm.$valid).toBe(true);
    });
  });

  describe('isbn13 directive', function() {

    beforeEach(inject(function($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should be invalid - text input', function(){
      scope.ISBNForm.isbn13.$setViewValue('invalid isbn');
      expect(scope.ISBNForm.isbn13.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - invalid isbn number', function(){
      scope.ISBNForm.isbn13.$setViewValue('1234567890123');
      expect(scope.ISBNForm.isbn13.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - short input', function(){
      scope.ISBNForm.isbn13.$setViewValue('123');
      expect(scope.ISBNForm.isbn13.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - long input', function(){
      scope.ISBNForm.isbn13.$setViewValue('123456789012345');
      expect(scope.ISBNForm.isbn13.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be invalid - string with number input', function(){
      scope.ISBNForm.isbn13.$setViewValue('isbn: 9781449344856');
      expect(scope.ISBNForm.isbn13.$valid).toBe(false);
      expect(scope.ISBNForm.$valid).toBe(false);
    });

    it('should be valid - number input', function(){
      scope.ISBNForm.isbn13.$setViewValue('9781449344856');
      expect(scope.ISBNForm.isbn13.$valid).toBe(true);
      expect(scope.ISBNForm.$valid).toBe(true);
    });

    it('should be valid - dashed input', function(){
      scope.ISBNForm.isbn13.$setViewValue('978-1-4493-4485-6');
      expect(scope.ISBNForm.isbn13.$valid).toBe(true);
      expect(scope.ISBNForm.$valid).toBe(true);
    });

    it('should be valid - spaced input', function(){
      scope.ISBNForm.isbn13.$setViewValue('978 1 4493 4485 6');
      expect(scope.ISBNForm.isbn13.$valid).toBe(true);
      expect(scope.ISBNForm.$valid).toBe(true);
    });
  });
});