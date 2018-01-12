(function (angular) {
    let module = angular.module('btnModule');

    module.directive('libBtn', function () {
        return {
            restrict: 'E',
            scope: {
                text: '@'
            },
            template: '<button>{{text}}</button>',
        };
    });
})(angular);

