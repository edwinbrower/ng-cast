angular.module('video-player')  // square brackets????? 
.directive('app', function() {

  return {
    
    controller: function($window) {
      var ctrl = this;
      // console.log(this);
      ctrl.selectVideo = function() {};
      ctrl.searchResults = function() {};
      ctrl.videos = window.exampleVideoData;
      ctrl.currentVideo = window.exampleVideoData[0];

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
