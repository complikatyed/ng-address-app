"use strict";

app.controller('ContactViewCtrl', function($scope, $routeParams, contactStorage){
  $scope.contacts = [];
  $scope.selectedContact = {};

  contactStorage.getContactList().then(function(contactCollection){
    console.log("thingy", contactCollection);
    $scope.contacts = contactCollection;

    $scope.selectedContact = $scope.contacts.filter(function(contact){
  return contact.id === $routeParams.contactId;
  })[0];
  });
});