angular.module('aplicacion')
.controller('reportesController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

    try{
        console.log("INFO: reportesController.inicio1 ");


    }catch(error){
        console.error("ERROR: reportesController.error ", error);
    }

}]);