'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http) {

        $http.get('../data.json').then(function (res) {
            console.log(res.data);
            format(res.data);
        });

        var format = function (val) {
            var a = {};
            val.forEach(function (val) {
                console.log(val);
                if (!a[val.name]) {
                    a[val.name] = {
                        'name': val.name
                    }
                }

                if (val.category === 'C1')
                    a[val.name].C1 = val.amount;
                else if (val.category === 'C2')
                    a[val.name].C2 = val.amount;
                else if (val.category === 'C3')
                    a[val.name].C3 = val.amount;

                //todo - remove the following code in the end
                // a[val.name] = {
                //     name: val.name,
                //     C1:
                // }

            });
            console.log(a);

            $scope.formattedValues = Object.keys(a).map(function (key) {
                return a[key];
            });

        };

    }]);