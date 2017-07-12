/**
 * 
 */
var configModule = angular.module('app'); // Please dont not use [],
											// dependency

//configModule.controller("logoutController", function($scope,$rootScope,authService,AUTH_EVENTS) {
//		console.log('..logoutController..');
//	  $rootScope.globals = {};
//	  $cookieStore.remove('globals');
//	  $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
//});

configModule.controller("applicationContoller", function($rootScope, $scope,$window) {

	

	$scope.init = function () {
		$scope.parentmethod();
	}
	
	$rootScope.$on("CallParentMethod", function() {
		$scope.parentmethod();
	});

	$scope.parentmethod = function() {
		console.log('..parent..');
		var globals = JSON.parse($window.localStorage.getItem("globals"));
		console.log(globals);

	
		
	 	if(globals){
	 		console.log('globals exits');
	 		
	 	
	 		$scope.username = "Welcome "+globals.userSession.name;
	 		
	 		console.log(globals);
	 		console.log(globals.userSession);
	 		if(globals.userSession.role === 'admin'){
	 			$('div#admin').show();
	 		}  else if(globals.userSession.role === 'creator'){
	 			$('div#creator').show();

	 		} else if(globals.userSession.role === 'donor'){
	 			$('div#donor').show();

	 		}
	 		
	 		$('div#guest').hide();
	 		$('div#logout').show();
	 		}
 		
 		 	else{
	 		console.log('globals does not exits');
	 		$('div#guest').show();
	 		$('div#admin').hide();
	 		$('div#creator').hide();
	 		$('div#donor').hide();
	 		$('div#logout').hide();
	 	}
	
	};
});


