(function () {
    angular.module('app')
    .factory('top100', top100);

    function top100 ($http) {

        var service ={
            getTop100: getTop100
        };

        function getTop100 () {
            return $http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
                .then(function (result) {
                return result.data.feed });
        }

        return service;
    }
})();
