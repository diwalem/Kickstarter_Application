/**
 * 
 */
 
var addCategoryModule = angular.module('addCategoryModule');
addCategoryModule.controller('addCategoryController', function($scope,$rootScope,$window,$location,addCategoryService) {
	var addCategoryCtrl = this;
	$scope.message="Add a category";
	//addProjectCtrl.message="Add a project";
	
	addCategoryCtrl.categoryDetails = {
			categoryName : '',
			categoryDesc : '',
			//categoryStatus : ''
		};
		
		//addProjectService.clearCredentials();
		
		addCategoryCtrl.add = function() {
			addCategoryService.add($rootScope.userSession.id, addCategoryCtrl.categoryDetails,callbackSuccess,callbackError);
		};
		var callbackSuccess = function(data,headers) {
	        
			$window.alert('Category has been added');
			//addCategoryCtrl.message = "Category has been added";
			$location.path('/category');
			    };
    
			    
        var callbackError = function(data) {
        	
    		addCategoryCtrl.message = "Adding action has failed as this category is already present.";
       
    };
});

addCategoryModule.factory('addCategoryService', function($rootScope,$http,$timeout,$cookieStore,$window,APP_CONSTANT,AUTH_EVENTS) {
	var addCategoryService = {};
	
	addCategoryService.add = function (id, data, callback,callbackError) {
		if(APP_CONSTANT.DEMO){
		
            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            $timeout(function(){
            	
            		var response;
            		if(data.username ==='admin' && data.password==='pass'){
            			response = { 
            					  			id:'50',
            					  			name:'Ashwin',
            					  			role:'admin'
            					  		  
            						};
            		}else{
                    response = {message:'Username or password is incorrect'};
            		}
     
                callback(response);
            }, 1000);
		}else{

        /* Use this for real authentication
         ----------------------------------------------*/
			console.log(data);
			
			//$http.post(APP_CONSTANT.REMOTE_HOST+'/user'+id+'/proj',data
			$http.post(APP_CONSTANT.REMOTE_HOST+'/user/'+id+'/addCategory', {
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
		}
		
    };
    
    return addCategoryService;
});