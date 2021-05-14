app.controller("accessController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",

	function ($scope, $log, $location, $http, $rootScope, $cookies) {
		$scope.run = function () {
			window.location = decodeURIComponent(
				"https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=76d6c621-e1e4-4bc2-8576-d947a485af00&redirect_uri=http://localhost:5500/#/auth"
			);
		};
		$scope.run();
	},
]);
app.controller("authController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",

	function ($scope, $log, $location, $http, $rootScope, $cookies) {
		if ($location.absUrl().includes("?code=")) {
			$scope.urlTrim = $location.absUrl().split("?code=")[1];
			$scope.code = $scope.urlTrim.substring(0, $scope.urlTrim.length - 6);
			// code print
			$log.info($scope.code);
			// setting root Scope
			$cookies.put("code", $scope.code);
		}
		window.location.href="http://localhost:5500/";
	},
]);
