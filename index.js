
(function () {
	angular
		.module('trial', ['ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {

	      $urlRouterProvider.otherwise('/');
		})
		.controller('trialController', function ($scope) {
			$scope.message = "Hello World";
		});
}) ()