angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = function(query, successCallback) {

    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then(function({data}) {
      if (successCallback) {
        successCallback(data.items);
      }
    }).catch(function({data}) {
      console.error('You have an error in getting data.', data);
    });

  };
});