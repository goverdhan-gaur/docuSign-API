app.controller("testController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",

	function ($scope, $log, $location, $http, $rootScope, $cookies) {
		$http({
			url: "https://account-d.docusign.com/oauth/token",
			method: "POST",
			data: { grant_type: "authorization_code" },
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Headers": "accept, content-type",
				"Access-Control-Allow-Methods": "POST",
				Authorization:
					"Basic NzZkNmM2MjEtZTFlNC00YmMyLTg1NzYtZDk0N2E0ODVhZjAwOjc3YWU3ZDQ4LTI4NDQtNDNiMi1iYjI3LWViZWJhNzk2MDIxNw==",
				"Access-Control-Request-Origin": "*",
            
            },
		}).then(function (response) {
			$cookies.put("accessToken", response.data.access_token);
		});
	},
]);
