/**
 * 
 */
 
var reasonForDeleteModule = angular.module('reasonForDeleteModule');
reasonForDeleteModule.controller('reasonForDeleteController', function($scope,$rootScope,$window,$location,reasonForDeleteService) {
	var reasonForDeleteCtrl = this;
	$scope.message="Give a reason for delete";
	//addProjectCtrl.message="Add a project";
	
	reasonForDeleteCtrl.reasonDetails = {
			reason : '',
			comment : '',
		};
		
		//addProjectService.clearCredentials();
		
	reasonForDeleteCtrl.deleteProject = function() {
		reasonForDeleteService.deleteProject($rootScope.projectId, reasonForDeleteCtrl.reasonDetails,callbackSuccess,callbackError);
		};
		var callbackSuccess = function(data,headers) {
	        
			$window.alert('Project has been deleted');
			//addCategoryCtrl.message = "Category has been added";
			$location.path('/category/view');
			    };
    
			    
        var callbackError = function(data) {
        	
        	reasonForDeleteCtrl.message = "Deletion failed";
       
    };
});

reasonForDeleteModule.factory('reasonForDeleteService', function($rootScope,$http,$timeout,$cookieStore,$window,APP_CONSTANT,AUTH_EVENTS) {
	var reasonForDeleteService = {};
	
	reasonForDeleteService.deleteProject = function (projectId, data, callback,callbackError) {
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
			$http.post(APP_CONSTANT.REMOTE_HOST+'/projectId/'+projectId, {
				"reason":data.reason,
				"comment":data.comment,
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
    
    return reasonForDeleteService;
});