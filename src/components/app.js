angular.module('video-player')  // square brackets????? 
.controller('AppController', function($scope) {
  $scope.videos = window.exampleVideoData;
  $scope.video = window.exampleVideoData[0];
  // $scope.selectVideo = function() {};
  // $scope.searchResults = function() {};
  console.log('app ', $scope);
  // $scope.

})
.directive('app', function() {

  return {
    
    controller: 'AppController',
    controllerAs: 'ctrl',
    bindToController: 'true',
    templateUrl: 'src/templates/app.html',
    // scope: {
    //   selectVideo: '<',
    //   searchResults: '<',
    //   currentVideo: '<',
    //   videos: '<'
    // //   // ctrl: this.controller
    // }, 
  };
});
