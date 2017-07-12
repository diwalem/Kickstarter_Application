/**
 * 
 */
 
var addProjectModule = angular.module('addProjectModule');
addProjectModule.controller('addProjectController', function($scope,$rootScope,$location,$window,addProjectService) {
	var addProjectCtrl = this;
	//$scope.message="Add a project";
	//addProjectCtrl.message="Add a project";
	
	addProjectCtrl.projectDetails = {
			projectName : '',
			projectDesc : '',
			endDate : '',
			projectAmount : ''
		};
		
		//addProjectService.clearCredentials();
		
		addProjectCtrl.add = function() {
			addProjectService.add($rootScope.userSession.id, $rootScope.categoryId, addProjectCtrl.projectDetails,callbackSuccess,callbackError);
		};
		var callbackSuccess = function(data,headers) {
	        
			//addProjectCtrl.message = "Project has been added";
			$window.alert('Project has been added');
			$location.path('/category/view/creatorProject');
    };
    
        var callbackError = function(data) {
    	
    	
    	if("Insertion failed" === data.message){
    		addProjectCtrl.message = "Adding action has failed";
    	}
       
    };
});

addProjectModule.factory('addProjectService', function($rootScope,$http,$timeout,$cookieStore,$window,APP_CONSTANT,AUTH_EVENTS) {
	var addProjectService = {};
	
	addProjectService.add = function (id, categoryId, data, callback,callbackError) {
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
			$http.post(APP_CONSTANT.REMOTE_HOST+'/user/'+id+'/addProj/'+categoryId, {
				"projectName":data.projectName,
				"projectDesc":data.projectDesc,
				"endDate":data.endDate,
				"projectStatus":data.projectStatus,
				"projectAmount":data.projectAmount
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
    
    return addProjectService;
});