angular.module('calendarApp', ['ui.bootstrap', 'calendar.header', 'calendar.scheduleApp'])

.controller('mainController', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
  $scope.templates = [
    {
      url: 'templates/calendar.html'
    },
    {
      url: 'templates/scheduleForm.html'
    }
  ];
  $scope.showForm = function (size) {
      $scope.submitted = false;
      var modalInstance = $modal.open({
        templateUrl: '/templates/scheduleForm.html',
        scope: $scope,
        size: size,
        controller: ['$scope', '$modalInstance', function($scope, $modalInstance, handleRequest) {
          $scope.ok = function () { 
            $modalInstance.close($scope.info);
          };
          $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
        }],
      });
      modalInstance.result.then(function (info) {
        $scope.info.name = info.name;
        $scope.info.email = info.email;
        $scope.info.text = info.text;
        handleRequest.sendPost($scope.info, function (response) {
          // console.log("response is", response);
          $scope.status = response;
          $scope.submitted = true;
        });
        },
      function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
}]);