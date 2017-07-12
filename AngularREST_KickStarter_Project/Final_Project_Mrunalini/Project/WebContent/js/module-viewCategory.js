/**
 * 
 */
 
var viewCategoryModule = angular.module('viewCategoryModule');
viewCategoryModule.controller('viewCategoryController', function($scope,$window,$rootScope,$location,viewCategoryService) {
	var viewCategoryCtrl = this;
	$scope.categoryName = $rootScope.categoryName;
	$scope.categoryDesc = $rootScope.categoryDesc;
	$scope.categoryId = $rootScope.categoryId;
	$scope.categoryStatus = $rootScope.categoryStatus;
	
	
	viewCategoryCtrl.categoryDetails = {
			categoryName : $rootScope.categoryName,
			categoryDesc : $rootScope.categoryDesc,
			categoryStatus : ''
		};
	
	var globals = JSON.parse($window.localStorage.getItem("globals"));
	
	
	viewCategoryCtrl.viewProject = function(){

		if(globals==null || globals.userSession.role === 'admin' || globals.userSession.role === 'donor')
		{
			$location.path('/category/view/project');
		
		}
		else if(globals.userSession.role === 'creator')
			
		{
			
			$location.path('/category/view/creatorProject');
			
		}
		
	}
	
	viewCategoryCtrl.hideDisableForOthers = function(){
		
		if(globals==null ||globals.userSession.role === 'creator' || globals.userSession.role === 'donor'){
			$('#disableCategory').hide();
				
		}
		
		if($rootScope.categoryStatus=="Inactive")
		{
			$('#disableCategory').hide();
		
		}
		
	}
	
	viewCategoryCtrl.hideDeleteForOthers = function(){
		
		if(globals==null || globals.userSession.role === 'creator' || globals.userSession.role === 'donor'){
			$('#deleteCategory').hide();
				
		}
		
	}
	
		
	viewCategoryCtrl.disableCategory = function(){
			viewCategoryService.disable($rootScope.userSession.id, $rootScope.categoryId,viewCategoryCtrl.categoryDetails, disableCallbackSuccess,disableCallbackError);
		};
		var disableCallbackSuccess = function(data,headers) {
	        
			$window.alert('Disabled successfully');
			$location.path('/category');
			//viewCategoryCtrl.message = "Disabled successfully";
			
    };
    
        var disableCallbackError = function(data) {
    	
    	
    	if("Insertion failed" === data.message){
    		viewCategoryCtrl.message = "Disabling action has failed";
    	}
       
    };
    
    viewCategoryCtrl.deleteCategory = function(){
    	
    	
		viewCategoryService.deleteCategory($rootScope.userSession.id, $rootScope.categoryId,viewCategoryCtrl.categoryDetails, deleteCallbackSuccess,deleteCallbackError);
	};
	var deleteCallbackSuccess = function(data,headers) {
        
		console.log("In module-viewProject-success" + data.message);
		//viewCategoryCtrl.message = "Deleted successfully";
		$window.alert("Deleted successfully");
		$location.path('/category');
		
		//addProjectCtrl.message = "Project has been added";
		//Storing information on $rootScope and Cookies
		//authService.setCredentials(data,headers);
		//$rootScope.responseData = data;
		//$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
};

    var deleteCallbackError = function(data) {
    
	
	if("Delete failed" === data.message){
		viewCategoryCtrl.message = "Deleting action has failed";
	}
   
};
		
	
	
});


viewCategoryModule.factory('viewCategoryService', function($rootScope,$http,$timeout,$cookieStore,$window,APP_CONSTANT,AUTH_EVENTS) {
	var viewCategoryService = {};
	
	viewCategoryService.disable = function (id, categoryId, data, callback,callbackError) {
		

        /* Use this for real authentication
         ----------------------------------------------*/
			
			//$http.post(APP_CONSTANT.REMOTE_HOST+'/user'+id+'/proj',data
			$http.post(APP_CONSTANT.REMOTE_HOST+'/user/'+id+'/disableCategory/'+categoryId,{
				"categoryName":data.categoryName,
				"categoryDesc":data.categoryDesc,
				"categoryStatus":data.categoryStatus
			}
			)
			.success(function(data, status, headers, config) {
				callback(data,headers);
			})
			.error(function(data, status, headers, config) {
				callbackError(data);
			})
		
		
    };
    
    
    viewCategoryService.deleteCategory = function (id, categoryId, data, callback,callbackError) {
		

        /* Use this for real authentication
         ----------------------------------------------*/
			
			//$http.post(APP_CONSTANT.REMOTE_HOST+'/user'+id+'/proj',data
			$http.post(APP_CONSTANT.REMOTE_HOST+'/user/'+id+'/deleteCategory/'+categoryId,{
				"categoryName":data.categoryName,
				"categoryDesc":data.categoryDesc,
				"categoryStatus":data.categoryStatus
			}
			)
			.success(function(data, status, headers, config) {
				callback(data,headers);
			})
			.error(function(data, status, headers, config) {
				callbackError(data);
			})
		
		
    };
    
    return viewCategoryService;
    });
