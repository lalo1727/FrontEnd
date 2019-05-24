angular.module('aplicacion')
.factory('pacienteService', [ '$http', '$q', '$rootScope',
function($http, $q, $rootScope) {
	var service = {};
	

	try {
		console.log('INFO: pacienteService.init');
		
		
	}
	catch (error) {
		console.error('ERROR: pacienteService.init', error);
	}


	return service;
}])