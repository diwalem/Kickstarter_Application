/**
 * 
 */ 

var projectModule = angular.module('projectModule');
 projectModule.controller('projectContoller', function($scope,$window, $rootScope,$location,projectService) {
	var projectCtrl = this;
	projectCtrl.message = "Select a project";
	
	projectCtrl.init = function(){
		
		console.log('init called')
		projectService.listProject($rootScope.categoryId,null,
				
		function(reponseData) {
			$scope.message = "Success";
    		$scope.error = false;
			console.log(reponseData);
			projectCtrl.projects = reponseData;
		},
		function(reponseData) {
			$scope.message = "Failed to load data";
    		$scope.error = true;   
		}
		);
	}
	
	
	
	projectCtrl.viewProject = function (row) {
		console.log(row);
		$rootScope.projectName = row.project.projectName;
		$rootScope.projectDesc = row.project.projectDesc;
		$rootScope.createdOn = row.project.createdOn;
		$rootScope.projectDuration = row.project.projectDuration;
		$rootScope.projectStatus = row.project.projectStatus;
		$rootScope.projectAmount = row.project.projectAmount;
		$rootScope.projectId = row.project.projectId;
		$rootScope.remainingAmount = row.project.remainingAmount;
		
		$location.path('/category/view/project/creatorViewProject');
		
		
};
	
     
	
	
		
	
});
 
 

 projectModule.factory('projectService', function($http,$timeout,APP_CONSTANT) {
	var projectService = {};
	
	projectService.listProject = function (categoryId,data, callback,callbackError) {
	
		
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
         			APP_CONSTANT.REMOTE_HOST+'/user/'+ 'project/'+categoryId
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
	
	
	return projectService;
});
