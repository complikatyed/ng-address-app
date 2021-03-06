'use strict';

app.factory("contactStorage", function($q, $http, firebaseURL) {

  var getContactList = function() {
    let contacts = [];

    return $q(function(resolve, reject) {
      $http
        // --- sends a 'get' call to the firebase database and grabs the object at that URL --- //
        .get(firebaseURL + "contacts.json")
        // --- on success, we now have access to the contacts data as an object --- //
        .success(function(objectFromFirebase) {

          var contactData = objectFromFirebase;
          // --- Uses the Object.keys method to loop through the object --- //

          Object.keys(contactData).forEach(function(key) {
            // --- says "make the id for each object the same as that object's key" --- //
            contactData[key].id = key;
            // --- adds the newly created id value to the array of contacts --- //
            contacts.push(contactData[key]);
          });
          resolve(contacts);
        })
        .error (function(error) {
          reject(error);
        });
    });
  };

  var deleteContact = function(contactId){
    return $q(function(resolve, reject){
      $http
        .delete(firebaseURL + "contacts/" + contactId + ".json")
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase);
        })
        .error(function(error){
          reject(error);
      });
    });
  };

  var postNewContact = function(newContact){
    return $q(function(resolve, reject) {
      $http
        .post(firebaseURL + "contacts.json",
          JSON.stringify({
            firstName: newContact.firstName,
            lastName: newContact.lastName,
            cellPhone: newContact.cellPhone,
            homePhone: newContact.homePhone,
          }))
        .success(function(objectFromFirebase) {
          resolve(objectFromFirebase);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  var getSingleContact = function(contactId){
    return $q(function(resolve, reject) {
      console.log("Things");
      $http
        .get(firebaseURL + "contacts/" + contactId + ".json")
        .success(function(contactObject){
          console.log(contactObject);
          resolve(contactObject);
        })
        .error(function(error){
          console.log("broken");
          reject(error);
        });
    });
  };




  return {getSingleContact:getSingleContact, getContactList:getContactList, deleteContact:deleteContact, postNewContact:postNewContact};

});

