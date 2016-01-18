'use strict';

angular.module('meanshopApp')
  .controller('NavbarController', function ($scope, Auth, $rootScope, $state, $window, $timeout) {
    $scope.menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Products',
    'state': 'products'
  }];

  $scope.isCollapsed = true;
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;
});
