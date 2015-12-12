angular.module('calendar.services', [])

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
        return date.getDate();
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

  .service('getSuffix', function (){
    return {
      suffix: function (day) {
        if (day === 1 || day === 21 || day === 31) {
          return "st";
        } else if (day === 2 || day === 22) {
          return "nd";
        } else if (day === 3 || day === 23) {
          return "rd";
        } else if (day >= 4 && day <= 20 || day >= 24 && day <= 30) {
          return "th";
        }
      }
    }
  })