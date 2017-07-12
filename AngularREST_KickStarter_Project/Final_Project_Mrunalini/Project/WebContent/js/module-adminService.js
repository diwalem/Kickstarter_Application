/**
 * 
 */ 

var adminServiceModule = angular.module('adminServiceModule');
adminServiceModule.controller('adminServiceController', function($scope,$window, $rootScope,$location,adminServiceService) {
	var adminServiceCtrl = this;
	adminServiceCtrl.message = "Select a service";
	
	adminServiceCtrl.init = function(){
		
		console.log('init called')
		adminServiceService.listService($rootScope.projectId,null,
				
		function(reponseData) {
			$scope.message = "Success";
    		$scope.error = false;
			console.log(reponseData);
			adminServiceCtrl.services = reponseData;
		},
		function(reponseData) {
			$scope.message = "Failed to load data";
    		$scope.error = true;   
		}
		);
	}
	
	
	
	adminServiceCtrl.viewService = function (row) {
		console.log("I am in adminService");
		console.log(row);
		$rootScope.serviceId = row.service.serviceId;
		$rootScope.serviceDesc = row.service.serviceDesc;
		$rootScope.serviceAmount = row.service.serviceAmount;
		$rootScope.serviceStatus = row.service.serviceStatus;
		
		/*var globals = JSON.parse($window.localStorage.getItem("globals"));
		
		console.log(globals.userSession.role);
		if(globals.userSession.role === 'admin')
		{
			$location.path('/category/view/project/viewProject');
		
		}
		else if(globals.userSession.role === 'creator')
		{
			$location.path('/category/view/project/creatorViewProject');
		}*/
			
		$location.path('/category/view/creatorProject/creatorViewProject/adminService/viewService');
		
};
		
	
});
 
 

adminServiceModule.factory('adminServiceService', function($http,$timeout,APP_CONSTANT) {
	var adminServiceService = {};
	
	adminServiceService.listService = function (projectId,data, callback,callbackError) {
	
		
	if(APP_CONSTANT.DEMO){
		$timeout(function(){
	         	
	     		var response;
	     		
	     			response = [
	     						{
	     							"name": "Dance",
	     							"desc": "Dance projects"
	     						},
	     						{
	     							"name": "Music",
	     							"desc": "Music projects"
	     						}
	     					];
	     	
	
	         callback(response);
	     }, 1000);
		}else{
			
			 $http.get(
         			APP_CONSTANT.REMOTE_HOST+'/user'+'/service/'+projectId
         			).success(function (data, status, headers, config) {
    					callback(data);
        			})
        			.error(function (data, status, headers, config) { // IF STATUS CODE NOT 200
        					if(status== 422){
        						callbackError(data);
        					}
        			});
			
		}
	};
	
	
	return adminServiceService;
});
