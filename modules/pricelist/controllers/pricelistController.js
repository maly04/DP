directPortalApp.controller("pricelistController", function ($scope, $http, serviceWrapper, metadataService, uiGridGroupingConstants) {


    $scope.selectedBuildings = [];
    $scope.selectedUnitTypes = [];
    $scope.selectedUnitStatuses = [];
    $scope.allBuildingID = [];
    $scope.allUnitTypeID = [];
    $scope.allUnitStatusID = [];


    angular.element(document).ready(function () {
        $('#buildingsFilter').accordion({
            collapsible: true,
            active: 0
        });
    });

    serviceWrapper.get('UnitType').get('', function (response) {
        $scope.unitTypes = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $scope.allUnitTypeID.push(response.data[i].ID);
        }
    }, function (error) {
        console.log(error);
    });

    serviceWrapper.get('UnitStatus').get('', function (response) {

        $scope.unitStatuses = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $scope.allUnitStatusID.push(response.data[i].ID);
        }

        }, function (error) {
            console.log(error);
        });


    serviceWrapper.get('Building').get('', function (response) {

        $scope.buildings = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $scope.allBuildingID.push(response.data[i].ID);
        }
        getAllPriceList();

    }, function (error) {
        console.log(error);
    });

    metadataService.get('Unit', '', function (response) {
        $scope.cols = response.data;
    }, function (error) {
        console.log(error);
    });

    $scope.gridOptions = {
        enableFiltering: true,
        treeRowHeaderAlwaysVisible: false,
        columnDefs: [
            { field: 'Building' },
            { field: 'UnitNumber' },
            { field: 'Type' },
            { field: 'Floor' },
            { field: 'Size' },
            { field: 'Status' },
            { field: 'Prices.Foreigner' },
            { field: 'Prices.Thai' },
            {
                field: 'ID', cellTemplate: '<div>' +
                '<a ui-sref="app.unit.detail({id:row.entity.ID})" class="btn btn-primary">View Detail</a>' +
                    '</div>'
            }
        ],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };

    $scope.selectUnitType = function (value, active) {

        var selectedUnitType = { ID: value }
        if (active) {
            $scope.selectedUnitTypes.push(selectedUnitType);
        } else {
            for (var i = 0; i < $scope.selectedUnitTypes.length; i++) {
                if (selectedUnitType.ID === $scope.selectedUnitTypes[i].ID) {
                    $scope.selectedUnitTypes.splice(i, 1);
                }
            }
        }

        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses()).then(function (data) {
            console.log();
            $scope.gridOptions.data = data.data;
        });
    }

    $scope.selectUnitStatus = function (value, active) {

        var selectedUnitStatus = { ID: value }
        if (active) {
            $scope.selectedUnitStatuses.push(selectedUnitStatus);
        } else {
            for (var i = 0; i < $scope.selectedUnitStatuses.length; i++) {
                if (selectedUnitStatus.ID === $scope.selectedUnitStatuses[i].ID) {
                    $scope.selectedUnitStatuses.splice(i, 1);
                }
            }
        }

        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses()).then(function (data) {
            $scope.gridOptions.data = data.data;
        });

    }



    $scope.selectBuilding = function (value, active) {
 
        var selectedBuilding = { ID: value }
        if (active) {
            $scope.selectedBuildings.push(selectedBuilding);
        } else {
            for (var i = 0; i < $scope.selectedBuildings.length; i++) {
                if (value.ID === $scope.selectedBuildings[i].ID.ID) {
                    $scope.selectedBuildings.splice(i, 1);
                }
            }
        }
        

        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses()).then(function (data) {
            console.log();
            $scope.gridOptions.data = data.data;
        });
       
    }

    function getSelectedStatuses()
    {
        var url = "";
        for (var i = 0; i < $scope.selectedUnitStatuses.length; i++) {
            url += "selectedStatuses=" + $scope.selectedUnitStatuses[i].ID + '&';
        }

        return url;
    }

    function getSelectedBuildings() {
        var url = "";
        for (var i = 0; i < $scope.selectedBuildings.length; i++) {
            url += "selectedBuildings=" + $scope.selectedBuildings[i].ID.ID + '&';
        }

        return url;
    }

    function getSelectedTypes()
    {
        var url = "";
        for (var i = 0; i < $scope.selectedUnitTypes.length; i++) {
            url += "selectedTypes=" + $scope.selectedUnitTypes[i].ID + '&';
        }
        

        return url;
    }

    function getAllPriceList () {
        console.log('get all price list');
        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getAllBuilding() + getAllUnitTypes() + getAllStatuses()).then(function (data) {
            console.log(data);
            $scope.gridOptions.data = data.data;
        });
    }

    function getAllBuilding() {
        var url = "";
        for (var i = 0; i < $scope.allBuildingID.length; i++) {
            url += "selectedBuildings=" + $scope.allBuildingID[i] + '&';
        }
        return url;
    }

    function getAllUnitTypes() {
        var url = "";
        for (var i = 0; i < $scope.allUnitTypeID.length; i++) {
            url += "selectedTypes=" + $scope.allUnitTypeID[i] + '&';
        }
        return url;
    }

    function getAllStatuses () {
        var url = "";
        for (var i = 0; i < $scope.allUnitStatusID.length; i++) {
            url += "selectedStatuses=" + $scope.allUnitStatusID[i] + '&';
        }
        return url;
    }

    
});