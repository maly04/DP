﻿directPortalApp.factory('documentsModuleService', function ($http, __env) {
    var documentsModuleService = {};

    documentsModuleService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?

    }
    //usersModuleService.create = function (user, successCallback, errorCallback) {
    //    if (undefined == errorCallback)
    //        errorCallback = this.defaultErrorHandler;

    //    $http.post(__env.apiUrl + 'api/users', user).then(successCallback, errorCallback);
    //};

    //usersModuleService.get = function (successCallback, errorCallback) {
    //    if (undefined == errorCallback)
    //        errorCallback = this.defaultErrorHandler;

    //    $http.get(__env.apiUrl + 'api/users').then(successCallback, errorCallback);
    //};


    return documentsModuleService;
});