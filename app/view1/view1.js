'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {


        $http.get('../data.json').then(function (res) {
            console.log(res.data);
            $scope.values = res.data;
            // format(res.data);
        });

        $scope.place = {
            column: 'category',
            descending: false
        };

        $scope.sort = function (val) {
            //$scope.sortBy = val;
            var place = $scope.place;
            if (place.column == val)
                place.descending = !place.descending;
            else {
                place.column = val;
                place.descending = false;
            }

            $scope.place = place;
        };


    }]);