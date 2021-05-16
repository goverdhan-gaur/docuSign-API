app.controller("logoutController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",
	"$window",

	function ($scope, $log, $location, $http, $rootScope, $cookies, $window) {
		var logoutWind = window.open(
			"https://account-d.docusign.com/logout",
			"logout",
			"width=200px,height=200px"
		);
		setTimeout(function () {
			logoutWind.close();
		}, 200);
		$cookies.remove("code");
		$cookies.remove("access_token");
		$cookies.remove("account_id");
		window.location.href = "/";
	},
]);
