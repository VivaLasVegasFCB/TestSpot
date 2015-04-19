angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {
            // Form data for the login modal
            $scope.loginData = {};
            
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                                        scope: $scope
                                        }).then(function(modal) {
                                                $scope.modal = modal;
                                                });
            
            // Triggered in the login modal to close it
            $scope.closeLogin = function() {
            $scope.modal.hide();
            };
            
            // Open the login modal
            $scope.login = function() {
            $scope.modal.show();
            };
            
            // Perform the login action when the user submits the login form
            $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);
            
            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                     $scope.closeLogin();
                     }, 1000);
            };
            
            $scope.go = function ( path ) {
            $location.path( path );
            };
})


.controller('PlaylistsCtrl', function($scope) {
            $scope.playlists = [
                                { title: 'Reggae', id: 1 },
                                { title: 'Chill', id: 2 },
                                { title: 'Dubstep', id: 3 },
                                { title: 'Indie', id: 4 },
                                { title: 'Rap', id: 5 },
                                { title: 'Cowbell', id: 6 }
                                ];
            })

.controller('PlaylistCtrl', function($scope, $stateParams) {
            })

.controller("cameraViewCtrl", function($scope, $cordovaCamera) {


    $scope.takePicture = function() {
        $scope.go('app/cameraView'); //to be cometed only test in ios simulator
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            $scope.go('app/cameraView');
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
 
})


.controller('createNewSpotCtrl', function($scope, $stateParams) {

     $scope.newSpot = {}; //Initialize model here
        $scope.categorys = [
          { name: 'Water', id: 1 },
          { name: 'Agressive', id: 2 },
          { name: 'Ball', id: 3 },
          { name: 'Snow', id: 4 },

        ];




        $scope.sports = [
          { name: 'Rollerblading', id: 1 },
          { name: 'Skateboard', id: 2 },
          { name: 'Bike', id: 3 },
          { name: 'Surf', id: 4 },
           { name: 'SnowBoard', id: 4 },
        ];


        $scope.difficultys = [
          { name: 'Beginner', id: 1 },
          { name: 'Amater', id: 2 },
          { name: 'Pro', id: 3 },

        ];

        $scope.addResource = function () {
            console.log($scope.newSpot);
        };


});
