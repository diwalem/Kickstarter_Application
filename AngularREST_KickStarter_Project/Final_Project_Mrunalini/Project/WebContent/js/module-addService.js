/**
 * 
 */
 
var addServiceModule = angular.module('addServiceModule');
addServiceModule.controller('addServiceController', function($scope, $window, $location , $rootScope,addServiceService) {
	var addServiceCtrl = this;
	$scope.message="Add Services";
	//addProjectCtrl.message="Add a project";
	
	addServiceCtrl.serviceDetails = {
			serviceDesc : '',
			serviceAmount : ''
			
		};
		
		addServiceCtrl.add = function() {
			addServiceService.add($rootScope.userSession.id, $rootScope.projectId, $rootScope.endDate, addServiceCtrl.serviceDetails,callbackSuccess,callbackError);
		};
		var callbackSuccess = function(data,headers) {
	        
			$window.alert('Service has been added');
			$location.path('/category/view/creatorProject/creatorViewProject/service');
			//addServiceCtrl.message = "Service has been added";
			
    };
    
        var callbackError = function(data) {
    	
    	
    	if("Insertion failed" === data.message){
    		addServiceCtrl.message = "Adding action has failed";
    	}
       
    };
});

addServiceModule.factory('addServiceService', function($rootScope,$http,$timeout,$cookieStore,$window,APP_CONSTANT,AUTH_EVENTS) {
	var addServiceService = {};
	
	addServiceService.add = function (id, projectId, endDate, data, callback,callbackError) {
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
			$http.post(APP_CONSTANT.REMOTE_HOST+'/user/'+id+'/addService/'+projectId+'/addEndDate/'+endDate, {
				"serviceDesc":data.serviceDesc,
				"serviceAmount":data.serviceAmount
				
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
    
    return addServiceService;
});