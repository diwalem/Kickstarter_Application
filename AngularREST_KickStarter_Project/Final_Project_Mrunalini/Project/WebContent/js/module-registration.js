/**
 * 
 */
var registrationModule = angular.module("registrationModule", []);
registrationModule.controller('registrationController', function($location, $window,
		$scope, registrationService) {

	var regCtrl = this;

	regCtrl.registration = {
		title : "",
		firstName : "",
		lastName : "",
		username : "",
		password : "",
		email : "",
		role : ""
	};




	regCtrl.cancel = function() {
		$location.path('/');
	}

	regCtrl.register = function() {
		console.log(regCtrl.registration);
		
				console.log("Registeration in if condi success");
				registrationService.register(regCtrl.registration, callbackSuccess,
					callbackError);
				

	}

	regCtrl.error = false;
	regCtrl.message = "";

	var callbackSuccess = function(data, headers) { // Status
		// Code:200
		//if (data.success) {
			//regCtrl.openComponentModal('Registration Successful');
		//	$location.path('/');
			
			$window.alert('Registration Successful');
			$location.path('/');

		//} 

	};

	var callbackError = function(data, headers) {
		//regCtrl.message = data.message;
		//regCtrl.error = true;
		$window.alert('Registration error');

	};



});

registrationModule.factory('registrationService', function($rootScope, $http,
		$timeout, $cookieStore, $window, APP_CONSTANT, AUTH_EVENTS) {
	var regService = {};

	regService.register = function(data, callback, callbackError) {
		if (APP_CONSTANT.DEMO) {

			/*
			 * Dummy authentication for testing, uses $timeout to simulate api
			 * call ----------------------------------------------
			 */
			$timeout(function() {

				var response;
				if (data.username === 'test' && data.password === 'test') {
					response = {
						success : true,
					};
				} else {
					response = {
						success: false,
						message : 'Registration was not successful'
					};
				}

				callback(response);
			}, 1000);
		} else {

			/*
			 * Use this for real authentication
			 * ----------------------------------------------
			 */
			$http.post(APP_CONSTANT.REMOTE_HOST + '/registration', data

			)
			// On Success of $http call
			.success(function(data, status, headers, config) {
				callback(data, headers);
			}).error(function(data, status, headers, config) { // IF
				// STATUS
				// CODE
				// NOT
				// 200
				callbackError(data, headers);
			});
		}

	};
	
	return regService;

});