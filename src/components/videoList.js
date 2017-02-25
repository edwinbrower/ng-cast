angular.module('video-player')

.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    // controller: function($scope) {
    //   // $scope.videos = window.exampleVideoData;
    //   $scope.videos = $scope.videos;
    //   console.log('SCOPE IN VIDEO LIST: ', $scope);
    // },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // console.log('VideoList: ', $scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});

