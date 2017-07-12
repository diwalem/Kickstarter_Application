/**
 * 
 */  

var creatorProjectModule = angular.module('creatorProjectModule');
creatorProjectModule.controller('creatorProjectController', function($scope,$window, $rootScope,$location,creatorProjectService) {
	var creatorProjectCtrl = this;
	creatorProjectCtrl.message = "Select a project";
	
	creatorProjectCtrl.init = function(){
		
		console.log('init called')
		creatorProjectService.listProject($rootScope.categoryId,null,
				
		function(reponseData) {
			$scope.message = "Success";
    		$scope.error = false;
    		console.log("In creatorProject responseData");
			console.log(reponseData);
			creatorProjectCtrl.projects = reponseData;
		},
		function(reponseData) {
			$scope.message = "Failed to load data";
    		$scope.error = true;   
		}
		);
	}
	
	console.log("in hide add project" + $rootScope.categoryStatus);
	
	creatorProjectCtrl.viewProject = function (row) {
		console.log("Before:I am in module-creatorProject");
		console.log(row);
		$rootScope.projectName = row.project.projectName;
		$rootScope.projectDesc = row.project.projectDesc;
		$rootScope.endDate = row.project.endDate;
		$rootScope.projectDuration = row.project.projectDuration;
		$rootScope.projectStatus = row.project.projectStatus;
		$rootScope.projectAmount = row.project.projectAmount;
		$rootScope.projectId = row.project.projectId;
		$rootScope.remainingAmount = row.project.remainingAmount;
		
		console.log("2:I am in module-creatorProject");
			$location.path('/category/view/creatorProject/creatorViewProject');
		
			console.log("3:I am in module-creatorProject");
		
	};
		
	//	var globals = JSON.parse($window.localStorage.getItem("globals"));
		
	//	console.log(globals.userSession.role);
	//	if(globals.userSession.role === 'admin')
	//	{
			//$location.path('/category/view/creatorProject/creatorViewProject');
		
	//	}
	//	else if(globals.userSession.role === 'creator')
	//	{
	//		$location.path('/category/view/project/creatorViewProject');
	//	}
			
			creatorProjectCtrl.addProject = function(){
				
				$location.path('/category/view/creatorProject/addProject');
				
			};
			
			creatorProjectCtrl.hideAddProjectIfCategoryInactive = function(){
				
				
				
				if($rootScope.categoryStatus=="Inactive")
				{
					$('#addProjectButton').hide();
				
				}
				
			};
		

	
     
	
	
		
	
});
 
 

creatorProjectModule.factory('creatorProjectService', function($http,$timeout,APP_CONSTANT) {
	var creatorProjectService = {};
	
	creatorProjectService.listProject = function (categoryId,data, callback,callbackError) {
	
		
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
         			APP_CONSTANT.REMOTE_HOST+'/user/'+'project/'+categoryId
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
	
	
	return creatorProjectService;
});
