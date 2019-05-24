angular.module('aplicacion')
.controller('inicioController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

    try{
        console.log("INFO: inicioController.inicio ");


    }catch(error){
        console.error("ERROR: inicioController.error ", error);
    }

}]);