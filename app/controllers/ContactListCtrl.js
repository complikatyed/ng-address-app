'use strict';

app.controller('ContactListCtrl', function($scope, contactStorage){

  $scope.contacts = [];

  contactStorage.getContactList().then(function(contactData) {
    $scope.contacts = contactData;
  });



});


//   $scope.itemDelete = function(itemId) {
//     itemStorage.deleteItem(itemId).then(function(response) {
//       itemStorage.getItemList().then(function(itemCollection) {
//         $scope.items = itemCollection;
//       });
//     });
//   };

//   $scope.inputChange = function(item) {
//     itemStorage.updateCompletedStatus(item).then(function(response) {

//     });
//   };

// });
