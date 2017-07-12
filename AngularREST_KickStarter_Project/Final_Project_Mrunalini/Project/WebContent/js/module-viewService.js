/**
 * 
 */
 
var viewServiceModule = angular.module('viewServiceModule');
viewServiceModule.controller('viewServiceController', function($scope,$window,$rootScope,$location) {
	var viewServiceCtrl = this;
	
	$scope.serviceId = $rootScope.serviceId;
	$scope.serviceDesc = $rootScope.serviceDesc;
	$scope.serviceAmount = $rootScope.serviceAmount;
	$scope.serviceStatus = $rootScope.serviceStatus;
	
	var globals = JSON.parse($window.localStorage.getItem("globals"));
	
	viewServiceCtrl.disableDonate = function(){
		
		if(globals==null || globals.userSession.role === 'creator' || globals.userSession.role === 'admin')
		{
			
			$('#donateBtn').hide();
		}	
		else if (globals.userSession.role === 'donor' && $rootScope.serviceStatus=="Inactive")
			{
				$('#donateBtn').hide();
			
			}
		else
			{
				$('#donateBtn').show();
			
			}

	}
	
	viewServiceCtrl.donate = function(){
		
		$location.path('/category/view/creatorProject/creatorViewProject/service/viewService/takeService');
		
	}
	
});