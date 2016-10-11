(function() {
    'use strict';

    angular
        .module('app')
        .controller('PhotoController', PhotoController);

    // Dependencias
    PhotoController.$injector = ['$scope'];

    function PhotoController($scope){

        // Lógica aqui
        // ...

        $scope.msg = "Foto";


        var watermark;
        var canvasDom;
        var canvas;





        navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {

            //Create a watermark image object
            watermark = new Image();
            watermark.src = "logo.png";

            watermark.onload = function(e){
                canvas.drawImage(watermark, 1, 1, 150, 75);
            }

            //Imagem Principal
            var img = new Image();
            img.src = "data:image/jpeg;base64," + imageData;

            var larguraImagem = window.innerWidth;
            var alturaImagem = (img.height * window.innerWidth)/img.width;

            canvasDom = document.getElementById('canvas');
            canvasDom.width = larguraImagem;
            canvasDom.height = alturaImagem;

            canvas = canvasDom.getContext("2d");

            img.onload = function(e) {
                canvas.drawImage(img, 0, 0, larguraImagem, alturaImagem);
                canvas.font = "30px Arial";
                canvas.fillText("", 10, 50);

            }


        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }



        $scope.salvar = function (){
          alert('salvando...')
            window.canvas2ImagePlugin.saveImageDataToLibrary(
                function(msg){
                    alert(msg);
				$location.path( "/inicio" );
        
                },
                function(err){
                    alert(err);
		        },
                document.getElementById('canvas')
            );
        }

		
        

        //fim ImageController
    }

})();
