var app = angular.module('rtfmApp')

app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){
	
	$scope.threads = $firebaseArray(threadsRef)

	$scope.threads.$loaded().then(function (threads){
		console.log(threads);
	});

$scope.createThread = function (username, title) {
	$scope.threads.$add({
		username: username,
		title: title
	  });
	}

})//end controller