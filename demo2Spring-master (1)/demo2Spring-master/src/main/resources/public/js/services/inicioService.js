angular.module('aplicacion')
.factory('inicioService', [ '$http', '$q', '$rootScope',
function($http, $q, $rootScope) {
	var service = {};
	

	try {
		console.log('INFO: inicioService.init');
		
		
	}
	catch (error) {
		console.error('ERROR: inicioService.init', error);
	}


	return service;
}])