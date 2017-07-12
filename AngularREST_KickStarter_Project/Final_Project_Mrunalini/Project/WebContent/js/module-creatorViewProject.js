/**
 * 
 */
 
var creatorViewProjectModule = angular.module('creatorViewProjectModule');
creatorViewProjectModule.controller('creatorViewProjectController', function($scope,$window,$rootScope,$location) {
	var creatorViewProjectCtrl = this;
	
	$scope.projectName = $rootScope.projectName;
	$scope.projectDesc = $rootScope.projectDesc;
	$scope.endDate = $rootScope.endDate;
	$scope.projectStatus = $rootScope.projectStatus;
	$scope.projectAmount = $rootScope.projectAmount;	
	$scope.projectId = $rootScope.projectId;
	$scope.remainingAmount = $rootScope.remainingAmount;
	
	
	
//var globals = JSON.parse($window.localStorage.getItem("globals"));
	
	
	/*creatorViewProjectCtrl.viewService = function()
{
		if(globals.userSession.role === 'admin')
		{
			$location.path('/category/view/creatorProject/creatorViewProject/adminService');
		
		}
		else if(globals.userSession.role === 'creator')
			
		{
			$location.path('/category/view/creatorProject/creatorViewProject/service');
			
		}
		
	}*/
	
	var globals = JSON.parse($window.localStorage.getItem("globals"));
	
	
	creatorViewProjectCtrl.viewService = function()
	{
		
		$location.path('/category/view/creatorProject/creatorViewProject/service');
	}
	
	creatorViewProjectCtrl.deleteProject = function()
	{
		
		$location.path('/category/view/project/creatorViewProject/reasonForDelete');
	}
	
	creatorViewProjectCtrl.hideDeleteProject = function()
	{
		
		if(globals==null ||globals.userSession.role === 'creator' || globals.userSession.role === 'donor'){
			$('#deleteProject').hide();
				
		}
		
		if($rootScope.projectStatus=="Inactive")
		{
			$('#deleteProject').hide();
		
		}
	}
	
});