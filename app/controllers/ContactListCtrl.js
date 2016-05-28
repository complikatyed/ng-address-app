'use strict';

app.controller('ContactListCtrl', function($scope, contactStorage){

  $scope.contacts = [];

  contactStorage.getContactList().then(function(contactData) {
    $scope.contacts = contactData;
  });

  $scope.contactDelete = function(contactId) {
    contactStorage.deleteContact(contactId).then(function(response) {
      contactStorage.getContactList().then(function(objectFromFirebase) {
        $scope.contacts = objectFromFirebase;
      });
    });
  };




});
