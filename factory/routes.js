(function() {
    'use strict';
    
    angular
        .module('factory')
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when('/factories', {
                templateUrl: 'factory/factory.html',
                controller: 'FactoryController',
                controllerAs: 'vm'
            });
    }
})();