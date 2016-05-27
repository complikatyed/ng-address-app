'use strict';

app.factory("contactStorage", function($q, $http, firebaseURL) {

  var getContactList = function() {

    let contacts = [];

    return $q(function(resolve, reject) {
      $http
        // --- sends a 'get' call to the firebase database and grabs the object at that URL --- //
        .get(firebaseURL + "contacts.json")
        // --- on success, we now have access to the contacts data as an object --- //
        .success(function(contactObject) {
          console.log(contactObject);
          var contactData = contactObject;
          // --- Uses the Object.keys method to loop through the object --- //
          Object.keys(contactData).forEach(function(key) {
            // --- says "make the id for each object the same as that object's key" --- //
            contactData[key].id = key;
            // --- adds the newly created id value to the array of contacts --- //
            contacts.push(contactData[key]);
          });
          resolve(contacts);
        }).error (function(error) {
          reject(error);
        });
    });

  };

  return {getContactList:getContactList};

});

