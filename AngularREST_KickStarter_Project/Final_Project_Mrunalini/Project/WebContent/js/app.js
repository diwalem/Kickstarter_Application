
/**
 * 
 */
'use strict';
// Step 1: declare modules
 angular.module("authModule",[]);
 angular.module("dashboardModule",[]);
 angular.module("personalModule",[]);
 angular.module("skillModule",[]);
 angular.module("projectModule",[]);
 angular.module("homeModule",[]);
 angular.module("registrationModule",[]);
 angular.module("categoryModule",[]);
 angular.module("viewCategoryModule",[]);
 angular.module("viewProjectModule",[]);
 angular.module("addCategoryModule",[]);
 angular.module("addProjectModule",[]);
 angular.module("creatorViewProjectModule",[]);
 angular.module("creatorProjectModule",[]);
 angular.module("serviceModule",[]); 
 angular.module("addServiceModule",[]);
 angular.module("viewServiceModule",[]);
 angular.module("adminServiceModule",[]);
 angular.module("takeServiceModule",[]);
 angular.module("guestCategoryModule",[]);
 angular.module("reasonForDeleteModule",[]);
 
 


 angular.module('appCoreModule', [
	 'ngRoute',
     'ngCookies'
 ]);
//Step 2: Register App
var app = angular.module("app", 
		[
		'appCoreModule',
		 'homeModule',
		 'authModule',
		 'dashboardModule',
		 'personalModule',
		 'skillModule',
		 'projectModule',
		 'registrationModule',
		 'categoryModule',
		 'viewCategoryModule',
		 'viewProjectModule',
		 'addCategoryModule',
		 'addProjectModule',
		 'creatorViewProjectModule',
		 'creatorProjectModule',
		 'addServiceModule',
		 'serviceModule',
		 'viewServiceModule',
		 'adminServiceModule',
		 'takeServiceModule',
		 'guestCategoryModule',
		 'reasonForDeleteModule'
		 ]);