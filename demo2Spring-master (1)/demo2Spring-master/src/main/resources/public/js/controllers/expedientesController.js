angular.module('aplicacion')
.controller('expedientesController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

    var pacientes = [
    	{
    		id:"12345",
    		nombre:"Eduardo",
    		apellidos:"Garnica Espinoza",
    		nacimiento:"02/02/1991",
    		edad:"28",
    		sexo:"M",
    		ocupacion:"Ingeniero"
    	},
    	{
    		id:"12346",
    		nombre:"Jesús",
    		apellidos:"Muñoz",
    		nacimiento:"03/06/1980",
    		edad:"34",
    		sexo:"M",
    		ocupacion:"Ingeniero"
    	}
    ];
    $scope.pacientes = pacientes;

    var enfermedades = [
    	{id: "123", nombre: "tos", tipo: "respiratoria"},
    	{id: "124", nombre: "gripa", tipo: "respiratoria"},
    	{id: "125", nombre: "anginas", tipo: "respiratoria"}
    ];
    $scope.enfermedades = enfermedades;

    try{
        console.log("INFO: expedientesController.inicio ");


    }catch(error){
        console.error("ERROR: expedientesController.error ", error);
    }

    $scope.selectPaciente = function(paciente){
    	try{
    		console.log("INFO: expedientesController.selectPaciente ", paciente);
    	}catch(error){
    		console.error("ERROR: expedientesController.selectPaciente.error ", error);
    	}

    }

    $scope.selectEnfermedad = function(enfermedad){
    	try{
    		console.log("INFO: expedientesController.selectEnfermedad ", enfermedad);
    	}catch(error){
    		console.error("ERROR: expedientesController.selectEnfermedad.error ", error);
    	}

    }

}]);