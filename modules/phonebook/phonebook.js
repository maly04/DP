var phonebook = angular.module('directPortalApp.phonebook', []);


phonebook.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('app.phonebook', {
            url: '/phonebook',
            templateUrl: 'directPortal/modules/phonebook/views/phonebook.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/phonebook/phonebook.css',
                        ]
                    });
                }]
            },
            controller: 'phonebookController'
        });

}]);