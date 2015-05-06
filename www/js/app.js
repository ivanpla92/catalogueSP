// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic',
    'starter.controllers',
    'starter.ctrl.modals.forms',
    'starter.factory',
    'starter.factory.familias',
    'starter.factory.artisxfotos',
    'starter.factory.articulos',
    'starter.factory.serieimgarti',
    'starter.services'
])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('app', {
                        url: "/app",
                        abstract: true,
                        templateUrl: "templates/menu.html",
                        controller: 'AppCtrl'
                    })

                    .state('app.buscar', {
                        url: "/buscar",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/buscar.html",
                                controller: 'cBuscarArticulos'
                            }
                        }

                    })

                    .state('app.familias', {
                        url: "/familias",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/familias.html",
                                controller: 'cFamilias'
                            }
                        }
                    })

                    .state('app.series', {
                        url: "/familias/:indexId",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/series.html",
                                controller: 'cSeriesdFamilias'
                            }
                        }
                    })
                    .state('app.serie', {
                        url: "/serie/:idSerie",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/serie.html",
                                controller: 'cArtisdSerie'
                            }
                        }
                    })
                    .state('app.acerca', {
                        url: "/acerca",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/acerca.html"
                            }
                        }
                    })
                    .state('app.artilista', {
                        url: "/artilista/:fotoId",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/artilista.html",
                                controller: 'cArticulosdImg'
                            }
                        }
                    })
                    .state('app.articulo', {
                        url: "/articulo/:artiId",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/articulo.html",
                                controller: 'cArticulo'
                            }
                        }
                    })
                    .state('app.home', {
                        url: "/home",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/home.html"
                            }
                        }
                    })
                    
                    .state('app.colores', {
                        url: "/colores",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/colores.html",
                            }
                        }
                    })
                    ;
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/home');
        });
