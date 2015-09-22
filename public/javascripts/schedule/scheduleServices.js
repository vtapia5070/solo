angular.module('schedule.services', [])
//probabbly want to sent to factory.js to send request
 .factory('sendRequest', function ($http){
  var newRequest = function(obj) {
    console.log('HELLO');
    return $http({
      method: "POST",
      url: '/post',
      data: obj
    })
  }
    return {
      newRequest: newRequest
    }
 })