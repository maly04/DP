directPortalApp.controller("phonebookController", function ($scope, $http, serviceWrapper, phonebookModuleService) { 

    phonebookModuleService.get(function (response) {
        $scope.persons = response.data.Contacts;
    });

    //$http.get(_env.apiUrl + 'modules/phonebook/Contacts').
    //    then(function (response) {
    //        $scope.persons = response.data.Contacts;
    //});
   
    $scope.body = '';
    $scope.subject = '';
    $scope.TO = [];
    $scope.CC = [];
    $scope.BCC = [];

    //serviceWrapper.get('Person').getAll('', function (response) {
    //    $scope.persons = response.data;
    //});

    function createMailtoLink(TO, CC, BCC, subject, body) {

        var link = 'mailto:' + $scope.TO.join(',') + '?'
            + ($scope.subject.length > 0 ? 'subject=' + $scope.subject : 'subject=%20')
            + ($scope.body.length > 0 ? '&body=' + $scope.body : '&body=%20')
            + ($scope.CC.length > 0 ? '&cc=' + $scope.CC.join(',') : '')
            + ($scope.BCC.length > 0 ? '&bcc=' + $scope.BCC.join(',') : '');
        console.log(link);
        return link;
    }

    $scope.mailto = function () {

        //if ($scope.TO.length < 1) {
        //    alert('you must set recipient');
        //    return false;
        //}
        //link = createMailtoLink($scope.TO, $scope.CC, $scope.BCC, $scope.subject, $scope.body);
        //window.location.href = link;
        $scope.messageType = 'SMS';
        if ($scope.messageType == 'SMS') {

            messagingModuleService.sendSms();

        } else {
            messagingModuleService.sendEmail();
        }

    }

    $scope.setContact = function (contactType, person) {
        if (['TO', 'CC', 'BCC'].indexOf(contactType) === -1) {
            alert('invalid');
            return false;
        }
        // person already exist, we delete him from the model and refresh the textarea
        console.log($scope[contactType].indexOf(person.EmailAddress));
        if ((i = $scope[contactType].indexOf(person.EmailAddress)) === -1) {
            $scope[contactType].push(person.EmailAddress);
            //$scope[contactType].push(person.Name + '@direct-portal.com');
            document.getElementById(contactType).innerText = $scope[contactType].join(',');
        }
        // dont exist, we add it to the model and refresh the textarea
        else {
            $scope[contactType] = [];
            console.log($scope[contactType]);
            //$scope[contactType].splice(i, 1);
            $scope[contactType].push(person.EmailAddress);
            document.getElementById(contactType).innerText = $scope[contactType].join(',');
        }

    }
    $scope.reset = function (contactType) {
        document.getElementById(contactType).innerText = '';
    };

});