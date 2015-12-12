angular.module('calendar.scheduleApp', ['schedule.services'])

.controller('scheduleController', function ($scope, $location, sendRequest) {
  $scope.request = {
    list: []
  };
  $scope.showData = false;
  $scope.hasData = function () {
    console.log("hasData", $scope.request.list.length);
    if (!$scope.request.list.length) {
      $scope.showData = false;
    }
  };

  $scope.retrieve = function(){
    sendRequest.retrieve()
    .then(function(result) {
      $scope.request.list = result;
    })
  };

  $scope.newRequest = function () {
    sendRequest.newRequest($scope.request)
    .then(function(result){
      $location = '/'
      $scope.retrieve();
      $scope.hasData = true;
    })
    .catch(function(error){
    })
  }

  $scope.init = function() {
    $scope.retrieve();
  }
  $scope.init();
})
