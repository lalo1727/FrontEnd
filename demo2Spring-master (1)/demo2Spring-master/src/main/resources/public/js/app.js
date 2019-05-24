angular.module('aplicacion', ['ngMaterial', 'ngMessages', 'ui.router', 'uiGmapgoogle-maps', 'chart.js' ])

.config(function ($stateProvider, $urlRouterProvider) {
	try {
	    console.log("INFO: Iniciando aplicación");
		$stateProvider

            .state('home', {
                url: '/',
                views: {
	                'contenido': {
	                    templateUrl: '/templates/inicio.html',
	                    controller: 'inicioController'
	                }
	            }
            })
            .state('home.pacientes', {
                url: 'pacientes',
                views: {
                    'contenido@': {
                        templateUrl: '/templates/pacientes.html',
                        controller: 'pacientesController'
                    }
                }
            })
            .state('home.recursos', {
                url: 'recursos',
                views: {
                    'contenido@': {
                        templateUrl: '/templates/recursos.html',
                        controller: 'recursosController'
                    }
                }
            })
            .state('home.expedientes', {
                url: 'expedientes',
                views: {
                    'contenido@': {
                        templateUrl: '/templates/expedientes.html',
                        controller: 'expedientesController'
                    }
                }
            })
            .state('home.reportes', {
                url: 'reportes',
                views: {
                    'contenido@': {
                        templateUrl: '/templates/reportes.html',
                        controller: 'reportesController'
                    }
                }
            })
         
        //$urlRouterProvider.otherwise('/inicio');
	}
	catch (error) {
		console.error('ERROR: Aplicacion', error);
	}
})

// Configuración de los colores del chart
.config(function (ChartJsProvider) {
  ChartJsProvider.setOptions({ colors : [ '#DCDCDC', '#00ADF9', '#46BFBD', '#FDB45C', '#803690', '#949FB1', '#4D5360'] });
})

// Carga del API de Google Maps
.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key : 'AIzaSyBkWHMv18bij6qJCK7TWLmilj9KAvendi8',
        v   : '3.24', 
        libraries : 'geometry,visualization'
    });
})

