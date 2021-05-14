app.controller("mainController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",

	function ($scope, $log, $location, $http, $rootScope, $cookies) {
		$log.info($rootScope);
	},
]);
