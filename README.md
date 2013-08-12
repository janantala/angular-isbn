# angular-isbn v0.1.0 [![Build Status](https://travis-ci.org/janantala/angular-isbn.png?branch=master)](https://travis-ci.org/janantala/angular-isbn)

ISBN number validation for AngularJS

### Supported ISBN input formats
- number: 1449344852
- dashed: 1-4493-4485-2
- spaced: 1 4493 4485 2

### Demo

Check out http://janantala.github.io/angular-isbn/demo/

# Requirements

- AngularJS v 1.0+

# Usage

We use [bower](http://twitter.github.com/bower/) for dependency management. Add

    dependencies: {
        "angular-isbn": "latest"
    }

To your `bower.json` file. Then run

    bower install

This will copy the angular-isbn files into your `bower_components` folder, along with its dependencies. Load the script files in your application:

    <script type="text/javascript" src="components/angular/angular.js"></script>
    <script type="text/javascript" src="components/angular-isbn/src/angular-isbn.js"></script>

Add the **ja.isbn** module as a dependency to your application module:

    var myAppModule = angular.module('MyApp', ['ja.isbn']);

### ISBN-10

Add isbn10 attribute into your input element.

    <input type="text" ng-model="isbn.isbn10" name="isbn10" isbn10 placeholder="1-4493-4485-2" />

### ISBN-13

Add isbn13 attribute into your input element.

    <input type="text" ng-model="isbn.isbn13" name="isbn13" isbn13 placeholder="978-1-4493-4485-6" />

# Testing

We use karma and jshint to ensure the quality of the code. The easiest way to run these checks is to use grunt:

    npm install -g grunt-cli
    npm install
    bower install
    grunt

The karma task will try to open Chrome as a browser in which to run the tests. Make sure this is available or change the configuration in `test/test.config.js` 

# Contributing

Pull requests are welcome. 

Make a PR against canary branch and don't bump any versions. 

Please respect the code style in place.

# License

The MIT License

Copyright (c) 2013 Jan Antala, https://github.com/janantala
