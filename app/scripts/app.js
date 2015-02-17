'use strict';

/**
 * @ngdoc overview
 * @name pingPongTableApp
 * @description
 * # pingPongTableApp
 *
 * Main module of the application.
 */
angular
  .module('pingPongTableApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'templates-main'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../views/main.tpl.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../views/about.tpl.html',
        controller: 'AboutCtrl'
      });
    $urlRouterProvider.otherwise('/home');
  });
