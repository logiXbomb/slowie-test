(function () {
    angular.module('app')
    .controller('cardDetailctrl', cardDetailctrl);

    function cardDetailctrl ($uibModalInstance, card) {

        var vm = this;
        vm.card = card;

        vm.ok = function(deck) {
            $uibModalInstance.close();
        };
    }
})();
