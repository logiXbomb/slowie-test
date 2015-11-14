(function () {
    angular.module('app')
    .controller('cardDetailctrl', cardDetailctrl);

    function cardDetailctrl ($uibModalInstance, card, $window) {

        var vm = this;
        vm.card = card;

        vm.ok = function(deck) {
            $uibModalInstance.close();
        };

        vm.buy = function() {
            $window.open(card.link.attributes.href, '_blank');
        }
    }
})();
