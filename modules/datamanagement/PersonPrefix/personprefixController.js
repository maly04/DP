directPortalApp.controller('personprefixController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('personprefix').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});