directPortalApp.controller('contractdetailtypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contractdetailtype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});