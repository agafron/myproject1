

angular.module('myApp', ['ui-router'])

	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
				template: '<good-work></good-work>'
			})
			.state('phone', {
				url: '/phone',
				template: '<good-phone></good-phone>'
			})
	})

	.component('goodWork', {
		template: '{{$ctrl.name}}',
		controller: function () {
			this.name = 'Alex';
		}

	})
	.component('goodPhone', {
		template: '{{$ctrl.name}}',
		controller: function () {
			this.name = '8888';
		}

	})