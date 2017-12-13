/**
 * the app deploy controller
 *
 * @author JThink
 */
define(['controllers/controllers', 'common/util', 'common/constant', 'services/dataService'], function (controllers, util, constant) {
    'use strict';
    controllers.controller('LoginController', ['$scope', 'DataService', '$state', function ($scope, DataService, $state) {
        console.log('登录页面');
        $scope.login = function (event) {
            console.log(event);
            alert('fads')
            // $state.go('index');
        }
    }]);
});