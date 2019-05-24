angular.module('aplicacion')
.controller('pacientesController', ['$scope', '$rootScope',
    function($scope, $rootScope) {


    var pacientes = [
        	{
        		id:"1",
        		nombre:"Jose Eduardo",
        		ape_Pa:"Cabrera",
        		ape_ma:"Escamilla",
        		nacimiento:"27/05/1997",
        		edad:"21",
        		sexo:"M",
        		ocupacion:"Trabajador"
        	},
        	{
        		id:"2",
        		nombre:"Jesús",
        		ape_Pa:"Muñoz",
        		ape_Ma:"Fernandez",
        		nacimiento:"03/06/1980",
        		edad:"34",
        		sexo:"M",
        		ocupacion:"Ingeniero"
        	}
        ];
        $scope.pacientes = pacientes;



    try{
        console.log("INFO: pacientesController.inicio ");


    }catch(error){
        console.error("ERROR: pacientesController.error ", error);
    }

$scope.selectPaciente = function(paciente){
    	try{
    		console.log("INFO: pacientesController.selectPaciente ", paciente);
    	}catch(error){
    		console.error("ERROR: pacientesController.selectPaciente.error ", error);
    	}
    }
}]);