/// <reference path="E:\Project.NET\TeduShop\TeduShop\TeduShop.Web\Assets/admin/libs/angular/angular.js" />

(function (app) {
    app.service('apiService', apiService);

    apiService.$inject = ['$http', 'notificationService'];
    function apiService($http, notificationService) {
        return {
            get: get,
            post: post,
            put: put,
            del : del,          
        }

        function get(url, params, fulfil, reject) {
            $http.get(url, params).then(function (result) {
                fulfil(result);
            }, function (err) {
                reject(err);
            });
        }

        function post(url, data, fulfill, reject) {
            $http.post(url, data).then(function (result) {
                fulfill(result);
            }, function (err) {
                if (err.status === 401) {
                    notificationService.displayError('Authenticate is required.');
                } else if (reject != null) {
                    reject(err);
                }  
            });
        }

        function put(url, params, fulfil, reject) {
            $http.put(url, params).then(function (result) {
                fulfil(result);
            }, function (err) {
                reject(err);
            });
        }

        function del(url, data, fulfill, reject) {
            $http.delete(url, data).then(function (result) {
                fulfill(result);
            }, function (error) {
                console.log(error.status)
                if (error.status === 401) {
                    notificationService.displayError('Authenticate is required.');
                }
                else if (reject != null) {
                    reject(error);
                }

            });
        }

    }
})(angular.module('tedushop.common'));