angular.module('video-player')
.controller('AppController', function($scope) {
  console.log('app ', $scope);
  $scope.videos = window.exampleVideoData;
  $scope.video = window.exampleVideoData[0];
  // $scope.

})
.directive('app', function() {

  return {
    
    // controllerAs: 'ctrl',
    // bindToController: 'true',
    // scope: {
    //   selectVideo: '<',
    //   searchResults: '<',
    //   currentVideo: '<',
    //   videos: '<',
    //   // ctrl: this.controller
    // }, 
    templateUrl: 'src/templates/app.html'
  };
});
