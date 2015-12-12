angular.module('calendarApp', ['calendar.header', 'calendar.scheduleApp'])

.controller('mainController', ['$scope', function ($scope) {
  $scope.templates = [
    {
      url: 'templates/calendar.html',
      controller: 'calendarController'
    },
    {
      url: 'templates/scheduleForm.html',
      controller: 'scheduleController'
    }
  ];
  $scope.init = function() {
      console.log('helloooooo');
  };
  $scope.init();
}]);