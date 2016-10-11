(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    // Dependencias
    HomeController.$injector = ['$scope'];

    function HomeController($scope){

        // Lógica aqui
        // ...
        $scope.msg = "Galeria";


        // pegar imagens da galeria, plasta principal Images
        // usando o plugin cordova-gallery-api
        // web: https://github.com/subitolabs/cordova-gallery-api



          $scope.images = [];

          galleryAPI.getMedia('Camera', function(items){
              for(var i = items.length; i > 0; i--){
                  $scope.images.push(items[i]);
              }
          }, function(error){alert(error);});









        //fim HomeController
    }

})();
