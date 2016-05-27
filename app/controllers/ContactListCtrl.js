'use strict';

app.controller('ContactListCtrl', function($scope){

$scope.contacts = [
    {
      firstName: "Mara",
      lastName: "Russell",
      cellPhone: "615-999-0300",
      homePhone: "615-915-2614"
    },
    {
      firstName: "Meg",
      lastName: "Benningfield",
      cellPhone: "615-612-8322",
      homePhone: "615-915-3404"
    },
    {
      firstName: "Mary",
      lastName: "McCullough",
      cellPhone: "615-364-5631",
      homePhone: "615-226-1789"
    }
  ];

});