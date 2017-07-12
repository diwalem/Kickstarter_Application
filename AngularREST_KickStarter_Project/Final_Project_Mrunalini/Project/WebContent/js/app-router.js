/**
 * 
 */
var configModule = angular.module('app'); // Please dont not use [], dependency 


configModule.config(function($routeProvider) {	
//    $urlRouterProvider.otherwise('/login');
	$routeProvider
    // route for the home page
	.when('/', {
		 templateUrl : 'partial/home.html',
	     controller  : 'homeController'
	})
	.when('/login', {
		 templateUrl : 'partial/login.html',
	     controller  : 'authController',
	     controllerAs: 'authCtrl'
	})
	.when('/registration', {
		 templateUrl : 'partial/registration.html',
	     controller  : 'registrationController',
	     controllerAs: 'regCtrl'
	})
	.when('/logout', {
		template :"",
		controller  : 'logoutController',
		redirectTo: '/' 
	})
	.when('/aboutus', {
		template :"Description of Kickstarter"
	})
	
	
    .when('/dashboard', {
        templateUrl : 'partial/dashboard.html',
        controller  : 'dashboardController',
        controllerAs: 'dashboardCtrl'
    })
    .when('/project/view', {
        templateUrl : 'partial/project.html',
        controller  : 'projectController'
    })
    .when('/skill', {
        templateUrl : 'partial/skill.html',
        controller  : 'skillContoller',
        controllerAs: 'skillCtrl'
    })
    
    .when('/category', {
        templateUrl : 'partial/category.html',
        controller  : 'categoryContoller',
        controllerAs: 'categoryCtrl'
    })
    
    .when('/guestCategory', {
        templateUrl : 'partial/guestCategory.html',
        controller  : 'guestCategoryContoller',
        controllerAs: 'guestCategoryCtrl'
    })
    
    .when('/category/view', {
        templateUrl : 'partial/viewCategory.html',
        controller  : 'viewCategoryController',
        controllerAs: 'viewCategoryCtrl'
    })
    
     .when('/category/view/project', {
        templateUrl : 'partial/project.html',
        controller  : 'projectContoller',
        controllerAs: 'projectCtrl'
    })
    
    .when('/category/view/creatorProject', {
        templateUrl : 'partial/creatorProject.html',
        controller  : 'creatorProjectController',
        controllerAs: 'creatorProjectCtrl'
    })
    
    .when('/category/view/project/viewProject', {
        templateUrl : 'partial/viewProject.html',
        controller  : 'viewProjectController',
        controllerAs: 'viewProjectCtrl'
    })
    
    .when('/category/view/creatorProject/creatorViewProject', {
        templateUrl : 'partial/creatorViewProject.html',
        controller  : 'creatorViewProjectController',
        controllerAs: 'creatorViewProjectCtrl'
    })
    
    // So that admin can see the projets and services.
    
    .when('/category/view/project/creatorViewProject', {
        templateUrl : 'partial/creatorViewProject.html',
        controller  : 'creatorViewProjectController',
        controllerAs: 'creatorViewProjectCtrl'
    })
    
    .when('/addCategory', {
        templateUrl : 'partial/addCategory.html',
        controller  : 'addCategoryController',
        controllerAs: 'addCategoryCtrl'
    })
    
    .when('/category/view/creatorProject/addProject', {
        templateUrl : 'partial/addProject.html',
        controller  : 'addProjectController',
        controllerAs: 'addProjectCtrl'
    })
    
    .when('/category/view/creatorProject', {
        templateUrl : 'partial/creatorProject.html',
        controller  : 'creatorProjectController',
        controllerAs: 'creatorProjectCtrl'
    })
    
    
     .when('/category/view/creatorProject/creatorViewProject/service/addService', {
        templateUrl : 'partial/addService.html',
        controller  : 'addServiceController',
        controllerAs: 'addServiceCtrl'
    })
    
    .when('/category/view/creatorProject/creatorViewProject/service', {
        templateUrl : 'partial/service.html',
        controller  : 'serviceController',
        controllerAs: 'serviceCtrl'
    })
    
     .when('/category/view/creatorProject/creatorViewProject/service/viewService', {
        templateUrl : 'partial/viewService.html',
        controller  : 'viewServiceController',
        controllerAs: 'viewServiceCtrl'
    })
    
    .when('/category/view/creatorProject/creatorViewProject/adminService', {
        templateUrl : 'partial/adminService.html',
        controller  : 'adminServiceController',
        controllerAs: 'adminServiceCtrl'
    })
    
    .when('/category/view/creatorProject/creatorViewProject/service/viewService/takeService', {
        templateUrl : 'partial/takeService.html',
        controller  : 'takeServiceController',
        controllerAs: 'takeServiceCtrl'
    })
    
    .when('/category/view/project/creatorViewProject/reasonForDelete', {
        templateUrl : 'partial/reasonForDelete.html',
        controller  : 'reasonForDeleteController',
        controllerAs: 'reasonForDeleteCtrl'
    })
    
    .when('/personal', {
        templateUrl : 'partial/personal.html',
        controller  : 'personalContoller',
        controllerAs: 'personalCtrl'
    })
    .otherwise({ redirectTo: '/' });
});


configModule.run(
	    function ($rootScope, $location, $cookieStore,$window, $http,AUTH_EVENTS) {
	    	//Management 
	    	$rootScope.$on('$locationChangeStart', function (event, next, current) {
	            // redirect to login page if not logged in
	    		console.log(' Requested path '+$location.path());
	            if ( 
	            		!(
	            				$location.path() == '/' || 
	            				$location.path() == '/registration'|| 
	            				$location.path() == '/login' ||
	            				$location.path() == '/aboutus' ||
	            				$location.path() == '/category' ||
	            				$location.path() == '/category/view' ||
	            				$location.path() == '/category/view/project' ||
	            				$location.path() == '/category/view/project/creatorViewProject' ||
	            				$location.path() == '/category/view/creatorProject/creatorViewProject/service' ||
	            				$location.path() == '/category/view/creatorProject/creatorViewProject/service/viewService'		
	            				
	            				
	            		 ) && 
	            		 !$rootScope.globals.userSession) {
	            	console.log('Invalid failed');
	                $location.path('/');
	            }
	        });
	    	
			$rootScope.$on(AUTH_EVENTS.loginFailed, function(event, next){
		    		console.log('Login failed');
		        	 //$scope.message = "Login failed";
		    });
		
			$rootScope.$on(AUTH_EVENTS.logoutSuccess, function(event, next){
				console.log('Logout Success');
				$window.localStorage.removeItem("globals");
				$rootScope.userSession=null;
				$rootScope.$emit("CallParentMethod", {});
				
			});
			
			$rootScope.$on(AUTH_EVENTS.notAuthorized, function(event, next){
				console.log('notAuthorized');
				$window.localStorage.removeItem("globals");
				$rootScope.userSession=null;
				$rootScope.$emit("CallParentMethod", {});
				
			});
	    
		    $rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, next){
				//$scope.message = "Login Success";
				console.log('Login success');
			    $window.localStorage.setItem("globals", angular.toJson($rootScope.globals));
			    //$rootScope.userSession=angular.toJson($rootScope.globals.userSession)
			    $rootScope.userSession = JSON.parse($window.localStorage.getItem("globals")).userSession;
			  
			    $rootScope.$emit("CallParentMethod", {});
				$location.path('/dashboard');
		    });
	    
		    // keep user logged in after page refresh
		    $rootScope.globals = $cookieStore.get('globals') || {};
		    if ($rootScope.globals.userSession) {
			    $window.localStorage.setItem("globals", angular.toJson($rootScope.globals));
			    $rootScope.userSession = JSON.parse($window.localStorage.getItem("globals")).userSession;
		    }

	})