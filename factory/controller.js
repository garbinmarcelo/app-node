(function() {
    'use strict';
    
    angular
        .module('factory')
        .controller('FactoryController', FactoryController);
    
    FactoryController.$inject = ['FactoryService'];
    
    function FactoryController(FactoryService) {
        var vm = this;
        vm.empty = {};
        
        vm.findAll = function() {
            FactoryService.findAll().then(function(response) {
                vm.factories = response.data;
            },function(error) {
                console.error(error);
            });
        }
        vm.findAll();
        
        vm.reset = function() {
            vm.factory = angular.copy(vm.empty);
        }
        vm.populate = function(factory) {
            vm.factory = angular.copy(factory);
        }
        vm.save = function(factory) {
            if (factory._id) {
                FactoryService.update(factory).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                },function(error) {
                    console.log(error);
                    vm.error = error.data;
                });
            } else {
                FactoryService.create(factory).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
        vm.remove = function(factory) {
            if (confirm('Tem certeza que gostaria de remover a fabrica ' + factory.name + '?')) {
                FactoryService.remove(factory._id).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
    }
})();