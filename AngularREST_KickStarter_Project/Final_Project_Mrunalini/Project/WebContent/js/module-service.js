/**
 * 
 */ 

var serviceModule = angular.module('serviceModule');
serviceModule.controller('serviceController', function($scope,$window, $rootScope,$location,serviceService) {
	var serviceCtrl = this;
	serviceCtrl.message = "Select a service";
	
	serviceCtrl.init = function(){
		
		console.log('init called')
		serviceService.listService($rootScope.projectId,null,
				
		function(reponseData) {
			$scope.message = "Success";
    		$scope.error = false;
			console.log(reponseData);
			serviceCtrl.services = reponseData;
		},
		function(reponseData) {
			$scope.message = "Failed to load data";
    		$scope.error = true;   
		}
		);
	}
	
	
	
	serviceCtrl.viewService = function (row) {
		console.log(row);
		$rootScope.serviceId = row.service.serviceId;
		$rootScope.serviceDesc = row.service.serviceDesc;
		$rootScope.serviceAmount = row.service.serviceAmount;
		$rootScope.serviceStatus = row.service.serviceStatus;
		
		
		$location.path('/category/view/creatorProject/creatorViewProject/service/viewService');
		
};

		serviceCtrl.addService = function(){
			
			$location.path('/category/view/creatorProject/creatorViewProject/service/addService');
			
		};
		
		var globals = JSON.parse($window.localStorage.getItem("globals"));
		
		serviceCtrl.disableAddServiceBtn = function(){
			
			
			if(globals==null || globals.userSession.role === 'admin' || globals.userSession.role === 'donor')
			{
				
				$('#addServiceBtn').hide();
			
			}
			else if(globals.userSession.role === 'creator' && $rootScope.projectStatus=="Active")
			{
				$('#addServiceBtn').show();
			}
			else if(globals.userSession.role === 'creator' && $rootScope.projectStatus=="Inactive")
			{
				
				$('#addServiceBtn').hide();
			}	
			
			
		}
	
     
		
	
		
	
});
 
 

serviceModule.factory('serviceService', function($http,$timeout,APP_CONSTANT) {
	var serviceService = {};
	
	serviceService.listService = function (projectId,data, callback,callbackError) {
	
		
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
	
	
	return serviceService;
});
