angular.module('schedule.services', [])

 .factory('sendRequest', function ($http){
  var newRequest = function(obj) {
    return $http({
      method: "POST",
      url: '/post',
      data: obj
    })
  };
  var retrieve = function (){
    return $http({
      method: "GET",
      url: '/post'
    })
    .then(function (resp) {
      return resp.data;
    }); 
  };
  return {
    newRequest: newRequest,
    retrieve: retrieve
  }
 })