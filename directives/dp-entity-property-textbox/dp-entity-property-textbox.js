directPortalApp.directive('dpEntityPropertyTextbox', function ($http, serviceWrapper) {
    function link(scope, element, attrs) {
        //console.log(attrs);
        scope.canedit = attrs.dpCanEdit;
        scope.entity = attrs.dpEntity;
        scope.entityId = attrs.dpEntityId;
        scope.fieldName = attrs.dpFieldName;
        scope.icon = attrs.dpIcon;
    }
    return {
        restrict: 'E',
        link: link,
        transclude: true,
        templateUrl: 'directPortal/directives/dp-entity-property-textbox/dp-entity-property-textbox.html',
        controller: function ($scope, $rootScope, serviceWrapper, $state) {
            serviceWrapper.get($scope.entity).get($scope.entityId, $scope.fieldName, function (response) {
              
                //console.log(response.data);
                $scope.model = response.data[0];
            }, function (error) { console.log(error); });          
        },
        scope: {
            canedit: '@dpCanEdit',
            entity: '@dpEntity',
            entityId: '@dpEntityId',
            fieldName: '@dpFieldName'

        }
    }
});

//{
//    canedit: '=',
//        entity: '=',
//            entityId: '=',
//                fieldName: '=',
//                    icon: '='
//}