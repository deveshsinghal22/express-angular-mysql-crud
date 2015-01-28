'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/student', {
        templateUrl: 'views/student.html',
        controller: 'StudentCtrl'
      })
      .when('/add-student', {
        templateUrl: 'views/add_student.html',
        controller: 'StudentCtrl'
      })
      .when('/student/edit/:id', {
        templateUrl: 'views/edit_student.html',
        controller: 'StudentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
