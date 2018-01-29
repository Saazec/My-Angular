/// <reference path="angular.min.js" />
var myApp= angular.module("module1", []);
myApp.controller("myController", function($scope){
    $scope.message = "This is text";
});
