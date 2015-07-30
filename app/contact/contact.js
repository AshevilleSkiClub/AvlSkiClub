'use strict';

angular.module('asc.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', function($scope) {
    $scope.groups = [{ name: 'Executive Officers', href: '#/contact#executive' }, 
                     { name: 'Board Members', href: '#/contact#board' },
                     { name: 'Activity Directors', href: '#/contact#activity' }];
    
    $scope.execContacts = [{ title: 'President', name: 'Jeff Kenrick', email: 'jpkenrick@aol.com', phone: '828-246-3035' },
                       { title: 'Vice President', name: 'Bill Melton', email: 'skibill@charter.net', phone: '828-243-4366' },
                       { title: 'Past President', name: 'John Hofler', email: 'jghofler@gmail.com', phone: '828-689-8641' },
                       { title: 'Treasurer', name: 'Don Shuford', email: 'donshuford@charter.net', phone: '828-777-0788' },
                       { title: 'Secretary', name: 'Nanci Burkley', email: 'nlbshrew@gmail.com', phone: '828-676-0355' }];
    
    $scope.boardContacts = [{ title: 'Member', name: 'Lauren Wall', email: 'lwall50@bellsouth.net', phone: '828-628-9019' },
                            { title: 'Member', name: 'Erik Sandstedt', email: 'seasonscatering@charter.net', phone: '828-654-9432' },
                            { title: 'Member', name: 'Jan Green', email: 'greenwine@charter.net', phone: '828-654-8482' },
                            { title: 'Member', name: 'Deborah Olsen', email: 'dwolsen1@gmail.com', phone: '828-280-2022' },
                            { title: 'Member', name: 'Paul Dobson', email: 'paultdobson@gmail.com', phone: '828-280-2022' }];
    
    $scope.activityContacts = [{ title: 'Newsletter', name: 'Tom Bushar', email: 'tbushar@gmail.com', phone: '828-254-4108' },
                            { title: 'Membership', name: 'Debbie Melton', email: 'ashskiclub@gmail.com', phone: '828-674-9323' },
                            { title: 'Publicity', name: 'Open', email: '', phone: '' },
                            { title: 'Special Events', name: 'Michelle Shuford', email: 'skibumlong@aol.com', phone: '828-768-0120' },
                            { title: 'Socials', name: 'Open', email: '', phone: '' },
                            { title: 'Trip Director', name: 'Jeff Kenrick', email: 'jpkenrick@aol.com', phone: '828-246-3035' },
                            { title: 'Racing', name: 'David Harrison', email: 'm3stripe@yahoo.com', phone: '828-275-1896' },
                            { title: 'Racing', name: 'Bobby Roland', email: 'DTCRol@bellsouth.net', phone: '828-273-4811' },
                            { title: 'Special Olympics', name: 'Sam Lloyd', email: 'zlloyd@windstream.net', phone: '864-384-4546' },
                            { title: 'Webmaster', name: 'Alex Wang', email: 'alex.wang298@gmail.com', phone: '828-246-1160' }];
    
}]);