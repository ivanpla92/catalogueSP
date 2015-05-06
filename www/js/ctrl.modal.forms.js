angular.module('starter.ctrl.modals.forms', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout, sIdiomas) {

            $scope.configData = {};
            $scope.idiomas = sIdiomas;
            $scope.configData.idioma = "en_EN";

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/config.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });
            // Triggered in the login modal to close it
            $scope.closeConfig = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.config = function () {
                $scope.modal.show();
            };
            
            $scope.cerrar = function () {
                ionic.Platform.exitApp();
                //navigator.app.exitApp();
            };

            // Perform the login action when the user submits the login form
            $scope.saveConfig = function () {

                $timeout(function () {
                    $scope.closeConfig();
                }, 1000);
            };
            
        })
        
        ;


