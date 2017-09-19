var app = angular.module('app',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'/login.html',
		controller:'wAcontroller'
	});

	$urlRouterProvider.otherwise('home');
})
app.controller('wAcontroller', ['$scope','$http',function($scope,$http){
		$scope.loadres = function(){
			$http.get('/new').success(function(data){
				$scope.data = data;
			})
		}
		$scope.authenticate = function(){
			$http.get('/getuser').success(function(data){
				
			})
		}
}])