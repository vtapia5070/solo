// angular.module('httpApp')
// .controller('taskController', function ($scope, task, sendRequest) {
//   $scope.init = function(){
//     $scope.getAll();
//   }
//   // $scope.create = function (){
//   //   var modalInstance = $modal.open({
//   //     templatUrl: '/index.html',
//   //     controller: 'scheduleController'
//   //   })
//   //   modalInstance.result.then(function() {
//   //     $scope.getAll();
//   //   }, function(){
//   //     $scope.getAll();
//   //   })
//   }
//   $scope.getAll = function(){
//     task.getAllTask()
//     .then(function(res) {
//       //success
//       $scope.tasksList = task.taskList;
//     }, function (err) {

//     })
//   }
//   $scope.deleteTask = function(id) {
//     task.deleteTask(id)
//     .then(function(res) {
//       $scope.getAll();
//     }, function () {
//       //error
//     })
//   }
//   $scope.init();
// })