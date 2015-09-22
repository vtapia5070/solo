var app = angular.module('calendarApp', [])

  .controller('headerController', function($scope, getCurrent, makeCal){
    $scope.dateinfo = {
      month: getCurrent.getMonth(),
      year: getCurrent.getYear(),
      day: getCurrent.getDay()
    },
    $scope.calRows = {
      row1: makeCal.setRows[0],
      row2: makeCal.setRows[1],
      row3: makeCal.setRows[2],
      row4: makeCal.setRows[3],
      row5: makeCal.setRows[4]
    }
    $scope.names = makeCal.names;
    $scope.styleToday = function(day) {
      if (day === makeCal.today) {
        return {
          "background-color": "#B0B8B5",
          "border-radius": "50px"
        }
      }
    };
  })

  .service('getCurrent', function(){
    var date = new Date;
    var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return {
      getMonth: function(){
        return months[date.getMonth()];
      },
      getYear: function(){
        return date.getFullYear();
      },
      getDay: function(){
        date.getDate();
      }
    }
  })

  .service('makeCal', function(){
    var names = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
    var date = new Date();
    var today = date.getDate();
    var generateCal = function () {
      var rows = [[]];
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      var firstDayName = firstDay.toDateString().split(" ");
      function setRow (num, count) {
        count = count || 0;
        var flag = false;
        var row = [];
        if (num >= 1) {
          for (var i = 0; i < names.length; i++) {
            count++;
            if (count > lastDay.getDate()) {
              row.push('');
              flag = true;
            } else 
            row.push(count);
          }
          rows.push(row);
          if (!flag) {          
            setRow(num++, count);
          } else {
            return;
          }
        }
      }
      var count = 0;
      for (var i = 0; i < names.length; i++){
        if (names[i] === firstDayName[0] && count === 0) {
          count++;
          rows[0].push(count);
        } else if (count === 0) {
          rows[0].push("");
        } else {
          count++;
          rows[0].push(count);
        }
      }
      setRow(1, count);
      return rows;
    };
    return {
      setRows : generateCal(),
      names: names,
      today: today
    }
  })
