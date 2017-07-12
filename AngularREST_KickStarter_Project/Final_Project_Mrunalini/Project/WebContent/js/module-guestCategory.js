/**
 * 
 */

var guestCategoryModule = angular.module('guestCategoryModule');
guestCategoryModule.controller('guestCategoryContoller', function($scope, $rootScope,$location,guestCategoryService) {
	var guestCategoryCtrl = this;
	guestCategoryCtrl.message = "Select a category";
	
	guestCategoryCtrl.init = function(){
		
		console.log('init called')
		guestCategoryService.listCategory(null,
				
		function(reponseData) {
			$scope.message = "Success";
    		$scope.error = false;
			console.log(reponseData);
			guestCategoryCtrl.categories = reponseData;
		},
		function(reponseData) {
			$scope.message = "Failed to load data";
    		$scope.error = true;   
		}
		);
	}
	
	guestCategoryCtrl.viewCategory = function (row) {
			console.log(row);
			$rootScope.categoryName = row.category.categoryName;
			$rootScope.categoryDesc = row.category.categoryDesc;
			$rootScope.categoryId = row.category.categoryId;
			$rootScope.categoryStatus = row.category.categoryStatus;
			$location.path('/guestCategory/view');

	};
	
		//categoryCtrl.goToAddCategory = function() {
		
		//$location.path('/category/addCategory');
	//}
	
	
		
	
});

guestCategoryModule.factory('guestCategoryService', function($http,$timeout,APP_CONSTANT) {
	var guestCategoryService = {};
	console.log("I am here");
	guestCategoryService.listCategory = function (data, callback,callbackError) {
	
		
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
         			APP_CONSTANT.REMOTE_HOST+'/user/' +'category/'
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
	
	
	return guestCategoryService;
});
