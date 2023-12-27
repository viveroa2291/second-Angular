(function () {
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController)
    .filter('loves', LovesFilter);

    DIController.$inject = ['$scope', '$filter', 'lovesFilter'];
    function DIController ($scope, $filter, lovesFilter) { 
        $scope.name = "Adan";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;
     
        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        $scope.sayMessage = function () {
            var msg =  "Adan likes to eat healthy snacks at night";
            var output = $filter('uppercase')(msg);
            return output;
        };
        $scope.sayLovesMessage = function () {
            var msg = "Adan likes to eat healthy snacks at night";
            msg = lovesFilter(msg);
            return msg;
        };
        $scope.feedAdan = function () {
            $scope.stateOfBeing = "fed";
        };
        
    }
    function LovesFilter() {
            return function (input) {
                input = input || "";
                input = input.replace("likes", "loves");
                return input;
            }
        };
}) ();