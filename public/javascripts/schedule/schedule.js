angular.module('calendar.scheduleApp', ['schedule.services'])

.controller('scheduleController', function ($scope, $location, sendRequest) {
  $scope.request = {};
  $scope.newRequest = function () {
    console.log("berRequest called");
    sendRequest.newRequest($scope.request)
    .then(function(result){
      console.log('what');
      $location.path('/schedule');
    })
    .catch(function(error){
      console.log("schedulecontroller", error);
    })
  }

  $scope.init = function() {
    console.log("INITIATED SCEDULE");
  }
  $scope.init();
})