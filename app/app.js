/**
 * Created by gusenlin on 2017/1/22.
 */
(function () {
  'use strict';
  angular.module('utilModule', []);
  angular.module('hmsModule', []);//汉得公用模块库
  angular.module('loginModule', []);
  angular.module('messageModule', []);
  angular.module('contactModule', []);
  angular.module('applicationModule', []);
  angular.module('myInfoModule', []);
  angular.module('utilsModule', []);

  angular.module('myApp', [
    'ionic',
    'ngCordova',
    'loginModule',
    'messageModule',
    'contactModule',
    'applicationModule',
    'myInfoModule',
    'utilModule',
    'hmsModule'
  ]);

  angular.module('myApp')
    .run(angularRun);

  angularRun.$inject = ['$ionicPlatform'];

  function angularRun($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      //将页面的导航bar设置成黑色
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      try {
        navigator.splashscreen.hide();
      } catch (e) {
      }
    });
  }

  angular.module('myApp')
    .config(config);

  config.$inject = ['$stateProvider','$urlRouterProvider','$ionicConfigProvider'];

  function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    //$ionicConfigProvider.templates.maxPrefetch(15);
    //$ionicConfigProvider.views.swipeBackEnabled(true);
    //$httpProvider.interceptors.push('httpRequestHeader');//注册过滤器
    //$httpProvider.interceptors[0] = $httpProvider.interceptors[0] + "access_token=" + window.localStorage.token;

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    //$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    $stateProvider
    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        templateUrl: 'build/pages/tab/tab.html',
        controller: 'tabCtrl',
        controllerAs: 'vm'
      })
      // Each tab has its own nav history stack:
      .state('tab.message', {
        url: '/message',
        views: {
          'tab-message': {
            templateUrl: 'build/pages/message/message.html',
            controller: ''
          }
        }
      })
      .state('tab.application', {
        url: '/application',
        views: {
          'tab-application': {
            templateUrl: 'build/pages/application/application.html',
            controller: ''
          }
        }
      })
      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'build/pages/contact/contact.html',
            controller: ''
          }
        }
      })
      .state('tab.myInfo', {
        url: '/myInfo',
        views: {
          'tab-myInfo': {
            templateUrl: 'build/pages/myInfo/myInfo.html',
            controller: ''
          }
        }
      });
    $urlRouterProvider.otherwise('/tab');
  }
})();
