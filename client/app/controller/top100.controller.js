(function () {
    angular.module('app')
    .controller('top100ctrl', top100ctrl);

    //top100ctrl.$inject = ['top100'];

    function top100ctrl (top100, $uibModal) {
        var vm = this;

        vm.top100 = {};
        vm.openCard = openCard;
        vm.searchAlbums = searchAlbums;

        var promise = top100.getTop100();
        promise.then(function(response){
            vm.top100 = response;
        });

        function openCard(card) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'html/cardDetails.html',
                controller: "cardDetailctrl",
                controllerAs: "d",
                resolve: {
                    card: function () {
                        return card;
                    }
                },
                size: 'lg'
            });
        }

        function searchAlbums (searchFilter) {
              return function(song) {
                return vm.top100.title.label === searchFilter;
            }
        };


    }
})();
