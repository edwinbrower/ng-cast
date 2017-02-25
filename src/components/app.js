angular.module('video-player')  // square brackets????? 
.directive('app', function() {

  return {
    
    controller: function($window) {
      var ctrl = this;
      // console.log(this);
      ctrl.videos = window.exampleVideoData;
      ctrl.currentVideo = window.exampleVideoData[0];
      ctrl.selectVideo = function() {};
      ctrl.searchResults = function() {};
      ctrl.onClick = function(index) {
        console.log('index ', index);
        ctrl.currentVideo = ctrl.videos[index];
      };

    },
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
    // scope: {
    // //   // ctrl: this.controller
    // }, 
// .controller('AppController', function($scope) {
//   $scope.videos = window.exampleVideoData;
//   $scope.video = window.exampleVideoData[0];
//   // $scope.selectVideo = function() {};
//   // $scope.searchResults = function() {};
//   console.log('app ', $scope);
//   // $scope.

// })
  };
});

// What we had would have likely worked had we spelled ctrl correct the whole time had ctlr and ctrl
// BOOOOOOOOO