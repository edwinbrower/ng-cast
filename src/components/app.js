angular.module('video-player')  // square brackets????? 

.directive('app', function() {

  return {

    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.selectVideo = function() {};
      this.searchResults = function() {};
      this.onClick = function(index) {
        console.log('index ', index);
        this.currentVideo = this.videos[index];
      }.bind(this);
      // ctrl.search = youTube.search;
      // // ctrl.search();
      // console.log(youTube.search);
      // ctrl.$inject = [$scope, 'youTube'];
    },
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'

  };
});