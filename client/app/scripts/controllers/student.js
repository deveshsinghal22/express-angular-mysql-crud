'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StudentCtrl
 * @description
 * # StudentCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentCtrl', function ($scope, $http, $location, $routeParams, $route) {

    //console.log("$stateParams =>", $stateParams);

    $scope.listStudents = function() {
      $http.get("http://localhost:3000/students").
        success(function(data, status, headers, config) {
          $scope.students = data
      }).
        error(function(data, status, headers, config) {

        });
    };

    $scope.addStudent = function() {
      var data = {
        name : $scope.studentName,
        marks : $scope.studentMarks
      };

      $http.post('/students/add', data).
        success(function(data, status, headers, config) {
          $location.path('/student')
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    $scope.editStudent = function() {
      var data = {
        id : $routeParams.id
      };

      $http.post('/students/getDetailById', data).
        success(function(data, status, headers, config) {
          var editStudentDetails = data.student[0];
          $scope.studentName = editStudentDetails.name;
          $scope.studentMarks = editStudentDetails.marks;
          $scope.studentId = editStudentDetails.id
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    $scope.deleteStudent = function(id) {
      var data = {
        id : id
      };

      $http.put('/students/removeStudent', data).
        success(function(data, status, headers, config) {
          $route.reload();
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    $scope.updateStudent = function() {
      var data = {
        name : $scope.studentName,
        marks : $scope.studentMarks,
        id : $scope.studentId
      };

      $http.put('/students/updateDetails', data).
        success(function(data, status, headers, config) {
          $location.path('/student')
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    }


  });
