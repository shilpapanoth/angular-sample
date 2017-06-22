(function () {
	angular
		.module('trial', ['ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {

	      $urlRouterProvider.otherwise('/');
		})
		.controller('trialController', function ($scope, $http) {
			$scope.message = "Hello World";
			$http({
				url: 'https://delivery.freshdirect.com/admin/login',
				method: 'POST',
				data: {"email":"admin@freshdirect.com","password":"cherry"}
			}).then(function (data) {
				console.log('response', data)
			}, function (error) {
				console.log('error', error);
			})
		});
}) ()