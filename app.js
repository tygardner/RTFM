var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);
 
app.constant('fb',{
	url:'https://rtfm-tg.firebaseio.com/'
});


app.config(function($routeProvider){

$routeProvider
    // .when('/', {
    //   templateUrl: 'auth/login.html',
    //   controller: 'LoginCtrl',
    //   })

  	.when('/threads', {
  		templateUrl: 'Threads/threads.html',
  		controller: 'threadsCtrl',
  		resolve: {
  			threadsRef: function(threadsService){
  				return threadsService.getThreads();
  			}
  		}
  	})

	.when('/threads/:threadId', {
    templateUrl: 'Threads/thread.html',
    controller: 'threadCtrl',
    resolve: {
      threadRef: function(threadsService, $route) {
        return threadsService.getThread($route.current.params.threadId);
      },
       commentsRef: function (threadsService, $route) {
        return threadsService.getComments($route.current.params.threadId);
       }
     }
	 })

	.otherwise({
		redirectTo: '/'
	})

});//end config