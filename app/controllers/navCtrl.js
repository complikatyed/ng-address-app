'use strict';

app.controller('NavCtrl', function($scope){

  $scope.navItems = [
    {
    name: 'Logout',
    url: '#/logout'
  },
  {
    name: 'List Contacts',
    url: '#/contacts/list'
  },
  {
    name:'Add New Contact',
    url: '#/contact/new'
  }
  ];
});