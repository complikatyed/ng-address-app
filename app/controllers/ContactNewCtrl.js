'use strict';

app.controller('ContactNewCtrl', function($scope){

  $scope.newContact = {};

  $scope.contacts = [];

  $scope.addNewContact = function() {
    $scope.newContact.id = $scope.contacts.length;
    $scope.contacts.push($scope.newContact);
    console.log($scope.contacts);
    $scope.newContact = '';
  };

});