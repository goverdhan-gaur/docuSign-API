app.controller("accessController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",

	function ($scope, $log, $location, $http, $rootScope, $cookies) {
		$scope.run = function () {
			window.location.href = decodeURIComponent(
				"https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=76d6c621-e1e4-4bc2-8576-d947a485af00&redirect_uri=http://localhost:5501"
			);
		};
		$scope.run();
	},
]);
