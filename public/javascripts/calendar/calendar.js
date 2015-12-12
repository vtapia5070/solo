angular.module('calendar.header', ['calendar.services', 'calendar.scheduleApp'])

  .controller('calendarController', function ($scope, getCurrent, makeCal){
    $scope.dateinfo = {
      month: getCurrent.getMonth(),
      year: getCurrent.getYear(),
      day: getCurrent.getDay()
    };
    $scope.calRows = {
      row1: makeCal.setRows[0],
      row2: makeCal.setRows[1],
      row3: makeCal.setRows[2],
      row4: makeCal.setRows[3],
      row5: makeCal.setRows[4]
    };
    $scope.names = makeCal.names;
    $scope.styleToday = function(day) {
      if (day === makeCal.today) {
        return {
          "background-color": "#B0B8B5",
          "border-radius": "50px"
        };
      }
    };
    // $scope.init = function() {
    //   console.log('helloooooo');
    // };
    // $scope.init();
  });