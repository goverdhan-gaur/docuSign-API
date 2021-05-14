app.controller("mainController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",
	"$window",

	function ($scope, $log, $location, $http, $rootScope, $cookies,$window) {
		// storing code in a variable
		$scope.code = $cookies.get("code");


		if($scope.code){
			$window.location.href="#/index.html";
		}
		//  access Token Request
		// $scope.acc = $http({
		// 		url: "https://account-d.docusign.com/oauth/token",
		// 		method: "POST",
		// 		data: { grant_type: "authorization_code", code: $scope.code },
		// 		headers: {
		// 			'Content-Type': 'application/x-www-form-urlencoded',
		// 			dataType: 'json',
		// 			Authorization:
		// 				"Basic NzZkNmM2MjEtZTFlNC00YmMyLTg1NzYtZDk0N2E0ODVhZjAwOjc3YWU3ZDQ4LTI4NDQtNDNiMi1iYjI3LWViZWJhNzk2MDIxNw==",
		// 		},
		// 	}).then(function (response) {
		// 		// $cookies.put("accessToken", response.data.access_token);
		// 		return response;
		// 	});
	},
]);
