angular.module('aplicacion')
.controller('recursosController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

    try{
        console.log("INFO: recursosController.inicio ");


    }catch(error){
        console.error("ERROR: recursosController.error ", error);
    }

}]);