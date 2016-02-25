(function() {
    'use strict';
    
    angular
        .module('factory')
        .service('FactoryService', FactoryService);
    
    FactoryService.$inject = ['API','$http'];
    
    function FactoryService(API,$http) {
        this.findAll = function() {
            return $http.get(API.url + 'factories');
        }
        this.create = function(factory) {
            return $http.post(API.url + 'factories', factory);
        }
        this.update = function(factory) {
            return $http.put(API.url + 'factories/' + factory._id, factory);
        }
        this.remove = function(id) {
            return $http.delete(API.url + 'factories/' + id);
        }
    }
})();