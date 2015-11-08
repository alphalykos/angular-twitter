'use strict';

/**
 * @ngdoc overview
 * @name angularedApp
 * @description
 * # angularedApp
 *
 * Main module of the application.
 */
// twitterApp is dependent on ngSanitize and twitterApp.services module
var app = angular
  .module('twitterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'twitterApp.services'
  ]);
