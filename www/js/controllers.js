angular.module('starter.controllers', [])

        .controller('cFamilias', function ($scope, fFamilias) {
            $scope.listaFamilias = fFamilias;
        })

        .controller('cSeriesdFamilias', function ($scope, $stateParams, fFamilias) {
            $scope.familia = fFamilias[$stateParams.indexId];
        })

        .controller('cBuscarArticulos', function ($scope, fArticulos) {
            $scope.dat = {};
            $scope.dat.exist=false;
            $scope.dat.nfound = false;
            $scope.dat.word = "";
            //ionic.on('Click', $scope.buscar(), $scope.busca);
            $scope.buscar = function () {
                if ($scope.busca !== "") {
                    $scope.dat.exist = false;
                    $scope.dat.nfound = false;
                    $scope.dat.arti = {};
                    for (var keyArti in fArticulos) {
                        if (fArticulos[keyArti].id === $scope.dat.word) {
                            $scope.dat.arti = fArticulos[keyArti];
                            $scope.dat.exist = true;
                        }
                    }
                    $scope.dat.nfound = !$scope.dat.exist;
                }
            };

        })

        .controller('cArtisdSerie', function ($scope, $stateParams, fImgArtidSerie) {
            $scope.datos = fImgArtidSerie[$stateParams.idSerie];
        })

        .controller('cArticulosdImg', function ($scope, $stateParams, fArtisxFotos) {
            $scope.datos = fArtisxFotos[$stateParams.fotoId];

        })

        .controller('cArticulo', function ($scope, $stateParams, fArticulos) {
            $scope.artiId = $stateParams.artiId;
            for (var keyArti in fArticulos) {
                if (fArticulos[keyArti].id === $stateParams.artiId) {
                    $scope.datos = fArticulos[keyArti];
                }
            }

        })
        ;