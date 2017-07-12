/**
 * 
 */
var personalModule = angular.module('personalModule');
personalModule.controller('personalContoller', function($scope,$location) {
	var personalCtrl = this;
	$scope.message = "This is personal";
	
	personalCtrl.browse = function() {
		$location.path('/category');
	};
	
});
