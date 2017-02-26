angular.module('video-player')
.controller('AppCtrl', function(youTube) {

  this.searchService = youTube;

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };

  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };

  youTube.search('beyonce', this.searchResults);

})
.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});