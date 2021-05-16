app.controller("mainController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",
	"$window",
	"$route",

	function ($scope, $log, $location, $http, $rootScope, $cookies, $window,$route) {
		// storing code in a variable
		
		$scope.code = $cookies.get("code");
		$scope.access_token = $cookies.get("access_token");
		$scope.recipients = [];
		if ($scope.code && $scope.access_token) {
			$window.location.href = "#/index.html";
		}

		console.log($scope.code);
		console.log($scope.access_token);
		// get user
		$http({
			url: "https://account-d.docusign.com/oauth/userinfo",
			method: "GET",
			headers: {
				Authorization: `Bearer ${$scope.access_token}`,
			},
		}).then(function (response) {
			// $cookies.put("account_id", response.data);
			$scope.userInfo = response.data;
			$cookies.put("account_id", response.data.accounts[0].account_id);
			// $route.reload();
		});

		// get folders
		$http({
			url: `https://demo.docusign.net/restapi/v2/accounts/${$cookies.get(
				"account_id"
			)}/search_folders/all`,
			method: "GET",
			headers: {
				Authorization: `Bearer ${$scope.access_token}`,
			},
		}).then(function (response) {
			$log.warn(response.data);
			$log.warn(response.data.folderItems);
			for (let i = 0; i < response.data.folderItems.length; i++) {
				$log.warn(response.data.folderItems[i].envelopeId);
				$http({
					url: `https://demo.docusign.net/restapi/v2.1/accounts/${$cookies.get(
						"account_id"
					)}/envelopes/${response.data.folderItems[i].envelopeId}/recipients`,
					method: "GET",
					headers: {
						Authorization: `Bearer ${$scope.access_token}`,
					},
				}).then(function (data) {
					$scope.recipients[i] = data.data.signers;
					// $route.reload();
				});
			}
			$scope.envelops = response.data.folderItems;
		});

		// get envelope
		$scope.getDoc = function (env) {
			$http({
				url: `https://demo.docusign.net/restapi/v2/accounts/${$cookies.get(
					"account_id"
				)}/envelopes/${env}/documents`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${$scope.access_token}`,
				},
			}).then(function (response) {
				$log.warn(response);
				// $route.reload();
			});
		};
		//
		$scope.envBase = `https://demo.docusign.net/restapi/v2/accounts/${$cookies.get(
			"account_id"
		)}`;
		$scope.logout = function () {
			$location.path("/logout");
		};
	},
]);
