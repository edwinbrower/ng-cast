angular.module('video-player')  // square brackets????? 
// .run('youTube', function() {
//   var YouTube = new youTube();
//   // var searchResults = YouTube.search();
// })
.directive('app', function() {

  return {
    
    controller: function($window, youTube) {
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
      ctrl.search = youTube.search;
      // ctrl.search();
      console.log(youTube.search);
      // ctrl.$inject = [$scope, 'youTube'];
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