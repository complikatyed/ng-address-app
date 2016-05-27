'use strict';

var app = angular.module('AddressApp', ['ngRoute'])
  .constant("firebaseURL", "https://groovyphonebook.firebaseio.com/");;

app.config(function($routeProvider){
  $routeProvider.
    when('/contacts/list', {
      templateUrl:'partials/contacts-list.html',
      controller: 'ContactListCtrl'
    }).
    when('/contact/new', {
      templateUrl: 'partials/contact-new.html',
      controller: 'ContactNewCtrl'
    }).
    otherwise('/contacts/list');
}
);