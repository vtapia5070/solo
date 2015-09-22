// angular.module('httpApp', [])
// .service('task', function task($http, $q, $rootScope){
//     var task = this;
//     task.getAllTasks = function (id) {
//       task.taskList = {};
//       var defer = $q.defer();

//       $http.get($rootScope.endPoint + '/task?taskId=' + id)
//       .success(function(res) {
//         task.taskList = res;
//         defer.resolve(res);
//       })
//       .error(function(err, status) {
//         defer.reject(err);
//       })

//       return defer.promise;
//     };

//     task.createTask = function() {
//       var defer = $q.defer();

//       $http.post($rootScope.endPoint + '/newTask', task)
//       .success(function(res) {
//         defer.resolve(res);
//       })
//       .error(function(err, status){
//         defer.reject(err);
//       })

//       return defer.promise;
//     }
//     task.deleteTask = function(id) {
//       var defer = $q.defer();

//       $http.delete($rootScope.endPoint + '/deleteTask?taskId=' + id)
//       .success(function(res){
//         defer.resolve(res);
//       })
//       .error(function(err, status){
//         defer.reject(err);
//       })
//       return defer.promise;
//     }

//     return task;
  
//   })