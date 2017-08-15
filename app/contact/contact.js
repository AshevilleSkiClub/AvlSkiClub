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
                     { name: 'Activity Directors', href: '#/contact#activity' },
                     { name: 'Racing', href: '#/contact#racing' }];
    
    $scope.execContacts = [{ title: 'President', name: 'Bill Melton', email: 'skibill@charter.net', phone: '828-243-4366' },
                       { title: 'Vice President/President-elect', name: 'Wayne Bailey', email: 'wayne_bailey642@hotmail.com', phone: '828-275-4566' },
                       { title: 'Past President', name: 'Jeff Kenrick', email: 'jpkenrick@aol.com', phone: '828-246-3035' },
                       { title: 'Treasurer', name: 'John Michael Kledis', email: 'johnmichaelk@gmail.com', phone: '828-242-6971' },
                       { title: 'Secretary', name: 'Donald Hummel', email: 'dhummel@waynesvillenc.gov', phone: '828-734-8424' }];
    
    $scope.boardContacts = [{ title: 'Chairman', name: 'Erik Sandstedt', email: 'seasonscatering@charter.net', phone: '828-654-9432' },
                            { title: 'Member', name: 'Paul Dobson', email: 'paultdobson@gmail.com', phone: '828-775-5132' },
                            { title: 'Member', name: 'James Baker', email: 'james_baker100@att.net', phone: '978-855-9335' },
                            { title: 'Member', name: 'Margaret Crum', email: 'mcrum211@charter.net', phone: '828-280-5239' },
                            { title: 'Member', name: 'Doug MacMillan', email: 'dpmacmillan@earthlink.net', phone: '828-545-9951' }];
    
    $scope.activityContacts = [{ title: 'Newsletter', name: 'Tom Bushar', email: 'tbushar@gmail.com', phone: '828-254-4108' },
                            { title: 'Membership', name: 'Debbie Melton', email: 'ashskiclub@gmail.com', phone: '828-674-9323' },
                            { title: 'Publicity', name: 'Open', email: '', phone: '' },
                            { title: 'Socials', name: 'Open', email: '', phone: '' },
                            { title: 'Club Trips Chair', name: 'Jeff Kenrick', email: 'jpkenrick@aol.com', phone: '828-246-3035' },
                            { title: 'Webmaster', name: 'Alex Wang', email: 'alex.wang298@gmail.com', phone: '828-246-1160' }];
    
    $scope.racingContacts = [{ title: 'Race Director', name: 'Erik Sandstedt', email: 'sweski@gmail.com', phone: '828-242-1540' },
                            { title: 'Junior Race Captain', name: 'Doug Macmillan', email: 'dpmacmillan@earthlink.net', phone: '828-545-9951' },
                            { title: 'Special Olympics', name: 'Sam Lloyd', email: 'zlloyd@windstream.net', phone: '864-384-4546' }];
    
}]);