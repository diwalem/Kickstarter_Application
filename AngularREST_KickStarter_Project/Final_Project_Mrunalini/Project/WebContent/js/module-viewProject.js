/**
 * 
 */
 
var viewProjectModule = angular.module('viewProjectModule');
viewProjectModule.controller('viewProjectController', function($scope,$rootScope,$location) {
	var viewProjectCtrl = this;
	
	$scope.projectName = $rootScope.projectName;
	$scope.projectDesc = $rootScope.projectDesc;
	$scope.createdOn = $rootScope.createdOn;
	$scope.projectDuration = $rootScope.projectDuration;
	$scope.projectStatus = $rootScope.projectStatus;
	$scope.projectAmount = $rootScope.projectAmount;	
	$scope.remainingAmount = $rootScope.remainingAmount;
	
});