var app = angular.module('AddressApp', ['ngRoute']);

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