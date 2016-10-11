(function() {
    'use strict';

    angular
        .module('app')
        .controller('ImageController', ImageController);

    // Dependencias
    ImageController.$injector = ['$scope', '$routeParams'];

    function ImageController($scope, $routeParams){

        // Lógica aqui
        // ...

        //change default directory at : platforms/android/src/com/subitolabs/cordova/galleryapi/GalleryAPI.java
        galleryAPI.getMedia('Camera', function(items){
            for(var i = 0; i <= items.length; i++){
              if(items[i].title == $routeParams.title){
                $scope.media = items[i];
                break;
              }
            }
        }, function(error){alert(error);});





        //fim ImageController
    }

})();
