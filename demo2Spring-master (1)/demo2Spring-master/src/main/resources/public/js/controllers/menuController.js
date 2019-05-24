angular.module('aplicacion').
		controller('menuController', [ '$scope',
function ($scope){
	$scope.sideNavOpen = true;
	$scope.iconoMenu = "icons/ic_menu_white_18px.svg";
	$scope.opciones = [
		{
			nombre : 'Inicio',
			url    : 'home',
			icono  : 'icons/ic_home_18px.svg'
		},
		{
			nombre : 'Pacientes',
			url    : 'home.pacientes',
			icono  : 'icons/ic_people_18px.svg'
		},
		{
			nombre : 'Recursos',
			url    : 'home.recursos',
			icono  : 'icons/ic_person_outline_18px.svg'
		},
		{
			nombre : 'Expedientes',
			url    : 'home.expedientes',
			icono  : 'icons/ic_people_18px.svg'
		},
		{
			nombre : 'Reportes',
			url    : 'home.reportes',
			icono  : 'icons/ic_person_outline_18px.svg'
		}
	];

	$scope.toggleLeft = function() {
		try {
			console.log('INFO: menuController.toggleLeft', $scope.sideNavOpen);
			if ($scope.sideNavOpen) {
				$scope.sideNavOpen = false;
				$scope.iconoMenu = "icons/ic_menu_white_18px.svg";
			}
			else {
				$scope.sideNavOpen = true;
				$scope.iconoMenu = "icons/ic_menu_white_18px.svg";
			}
		}
		catch (error) {
			// Se detecto un error en el procedimiento
			console.error('ERROR: menuController.toggleLeft', error);
		}
	};

	// Inicialización del controlador
	try {
		console.log('INFO: MainController.init');
	}
	catch (error) {
		// Se detecto un error en el procedimiento
		console.error('ERROR: MainController.init', error);
	}
}]);