app.controller("sendController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$cookies",

	function ($scope, $log, $location, $http, $cookies) {
		$scope.code = $cookies.get("code");
		$scope.access_token = $cookies.get("access_token");
		$scope.account_id = $cookies.get("account_id");
		$scope.name = "";
		$scope.emailSender = "";
		// Submit method to call the http request method after validation
		$scope.submit = function () {
			if ($scope.name && $scope.emailSender) {
				$scope.sendthis($scope.name, $scope.emailSender);
			}
		};
		// Method to make a post request for sending the template
		$scope.sendthis = function (name, email) {
			let document = {
				templateId: "d36af096-2d6e-474b-8d7c-05581f9d401b",
				templateRoles: [
					{
						email: email,
						name: name,
						roleName: "signer",
					},
				],
				status: "sent",
			};
			$scope.email = JSON.stringify(document);
			$http({
				url: `https://demo.docusign.net/restapi/v2/accounts/${$cookies.get(
					"account_id"
				)}/envelopes`,
				method: "POST",
				data: $scope.email,
				headers: {
					Authorization: `Bearer ${$scope.access_token}`,
					"Content-Type": "application/json",
				},
			})
				.then(function (res) {
					$location.path("/");
				})
		};
	},
]);
