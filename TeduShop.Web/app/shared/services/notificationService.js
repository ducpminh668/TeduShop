/// <reference path="E:\Project.NET\TeduShop\TeduShop\TeduShop.Web\Assets/admin/libs/angular/angular.js" />


(function (app) {
    app.factory('notificationService', notificationService);

    function notificationService() {
        toastr.options = {
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 1000,
            "timeOut": 3000,
            "extendedTimeOut": 1000
        };

        function displaySuccess(messages) {
            toastr.success(messages)
        }

        function displayError(error) {
            if (Array.isArray(error)) {
                err.each(function (err) {
                    toastr.error(err);
                });
            } else {
                toastr.error(error);
            }
        }

        function displayWarning(messages) {
            toastr.warning(messages)
        }

        function displayInfo(messages) {
            toastr.info(messages)
        }

        return {
            displaySuccess: displaySuccess,
            displayError: displayError,
            displayWarning: displayWarning,
            displayInfo: displayInfo
        }
    }
})(angular.module('tedushop.common'));