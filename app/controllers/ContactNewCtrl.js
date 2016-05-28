'use strict';

app.controller('ContactNewCtrl', function($scope, $location, contactStorage){

  $scope.newContact = {
    firstName: "",
    lastName: "",
    cellPhone: "",
    homePhone: ""
  };

  $scope.addNewContact = function(){
    contactStorage.postNewContact($scope.newContact)
      .then(function successCallback(response) {
        $location.url("/contacts/list");
      });
  };

});
