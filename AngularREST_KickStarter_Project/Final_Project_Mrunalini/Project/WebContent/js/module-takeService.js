/**
 * 
 */
 
var takeServiceModule = angular.module('takeServiceModule');
takeServiceModule.controller('takeServiceController', function($scope,$rootScope,$window, $location,takeServiceService) {
	var takeServiceCtrl = this;
	$scope.message="Make the payment";
	//addProjectCtrl.message="Add a project";
	
	takeServiceCtrl.cardDetails = {
			cardNo : '',
			cvv : '',
			expiry : ''
		};
		
		//addProjectService.clearCredentials();
		
	takeServiceCtrl.pay = function() {
		takeServiceService.pay($rootScope.userSession.id, $rootScope.projectId, $rootScope.serviceId, $rootScope.serviceAmount,takeServiceCtrl.cardDetails,callbackSuccess,callbackError);
		};
		var callbackSuccess = function(data,headers) {
	        
			$window.alert('Payment Successful');
			//takeServiceCtrl.message = "Payment Successful";
			
    };
    
        var callbackError = function(data) {
    	
    	
    	if("Insertion failed" === data.message){
    		takeServiceCtrl.message = "Payment failed";
    	}
       
    };
});

takeServiceModule.factory('takeServiceService', function($rootScope,$http,$timeout,$cookieStore,$window,APP_CONSTANT,AUTH_EVENTS) {
	var takeServiceService = {};
	
	takeServiceService.pay = function (id, projectId, serviceId, serviceAmount, data, callback,callbackError) {
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
			$http.post(APP_CONSTANT.REMOTE_HOST+'/user/'+id+'/takeService/'+projectId + '/addCard/' +serviceId + '/serviceAmount/' +serviceAmount, {
				"cardNo":data.cardNo,
				"cvv":data.cvv,
				"expiry":data.expiry
				
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
    
    return takeServiceService;
});