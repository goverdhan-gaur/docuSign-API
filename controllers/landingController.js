app.controller("mainController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$cookies",
	"$window",

	function ($scope, $log, $location, $http, $cookies, $window) {
		$scope.refresh = function () {
			$location.path("/");
		};
		$scope.code = $cookies.get("code");
		$scope.access_token = $cookies.get("access_token");
		$scope.account_id = $cookies.get("account_id");
		$scope.recipients = [];
		if ($scope.code && $scope.access_token) {
			$window.location.href = "#/index.html";
		}

		console.log($scope.code);
		console.log($scope.access_token);

		$scope.CheckStatus = function (arg) {
			console.log(arg);
			if (arg == "voided") {
				return true;
			}
			if (arg == "created") {
				return true;
			}

			if (arg == "template") {
				return true;
			}
		};
		// get user
		$http({
			url: "https://account-d.docusign.com/oauth/userinfo",
			method: "GET",
			headers: {
				Authorization: `Bearer ${$scope.access_token}`,
			},
		}).then(function (response) {
			$scope.userInfo = response.data;
			$cookies.put("account_id", response.data.accounts[0].account_id);
		});

		// get folders
		$http({
			url: `https://demo.docusign.net/restapi/v2.1/accounts/${$cookies.get(
				"account_id"
			)}/search_folders/all`,
			method: "GET",
			headers: {
				Authorization: `Bearer ${$scope.access_token}`,
			},
		}).then(function (response) {
			$log.warn(response.data.folderItems);
			for (let i = 0; i < response.data.folderItems.length; i++) {
				$log.warn(response.data.folderItems[i].envelopeId);
				$http({
					url: `https://demo.docusign.net/restapi/v2.1/accounts/${$cookies.get(
						"account_id"
					)}/envelopes/${response.data.folderItems[i].envelopeId}/recipients`,
					method: "GET",
					headers: {
						Accept: "Content-Type: application/json",
						Authorization: `Bearer ${$scope.access_token}`,
					},
				}).then(function (data) {
					$scope.recipients[i] = data.data.signers;
				});
			}
			$scope.envelops = response.data.folderItems;
		});

		//send envelopes
		$scope.send = function (evnID) {
			console.log(
				`https://demo.docusign.net/restapi/v2/accounts/${$cookies.get(
					"account_id"
				)}/envelopes`
			);
			$location.path("/send/" + evnID);
		};

		$scope.envBase = `https://demo.docusign.net/restapi/v2/accounts/${$cookies.get(
			"account_id"
		)}`;
		$scope.logout = function () {
			$location.path("/logout");
		};
	},
]);
