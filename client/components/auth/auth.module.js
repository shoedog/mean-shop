'use strict';

angular.module('meanshopApp.auth', [
  'meanshopApp.constants',
  'meanshopApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
