angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // console.log('Player: ', $scope);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
