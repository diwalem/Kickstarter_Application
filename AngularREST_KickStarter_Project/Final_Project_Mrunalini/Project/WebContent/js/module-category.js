/**
 * 
 */

var categoryModule = angular.module('categoryModule');
categoryModule.controller('categoryContoller', function($scope, $rootScope,$location,categoryService) {
	var categoryCtrl = this;
	categoryCtrl.message = "Select a category";
	
	categoryCtrl.init = function(){
		
		console.log('init called')
		categoryService.listCategory(null,
				
		function(reponseData) {
			$scope.message = "Success";
    		$scope.error = false;
			console.log(reponseData);
			categoryCtrl.categories = reponseData;
		},
		function(reponseData) {
			$scope.message = "Failed to load data";
    		$scope.error = true;   
		}
		);
	}
	
	       categoryCtrl.viewCategory = function (row) {
			console.log(row);
			console.log("view category");
			$rootScope.categoryName = row.category.categoryName;
			$rootScope.categoryDesc = row.category.categoryDesc;
			$rootScope.categoryId = row.category.categoryId;
			$rootScope.categoryStatus = row.category.categoryStatus;
			$location.path('/category/view');

	};
	
		//categoryCtrl.goToAddCategory = function() {
		
		//$location.path('/category/addCategory');
	//}
	
	
		
	
});

categoryModule.factory('categoryService', function($http,$timeout,APP_CONSTANT) {
	var categoryService = {};
	console.log("I am here");
	categoryService.listCategory = function (data, callback,callbackError) {
	
		
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
         			APP_CONSTANT.REMOTE_HOST+'/user/'+ 'category/'
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
	
	
	return categoryService;
});
