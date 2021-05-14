app.controller("testController", [
	"$scope",
	"$log",
	"$location",
	"$http",
	"$rootScope",
	"$cookies",

	function ($scope, $log, $location, $http, $rootScope, $cookies) {
		$scope.post = function () {
			$http.defaults.headers.post["Content-Type"] =
				"application/x-www-form-urlencoded";
			delete $http.defaults.headers.common["X-Requested-With"];

			var data = JSON.stringify({
				grant_type: "authorization_code",
			});

			$http({
				url: "https://account-d.docusign.com/oauth/token",
				method: "POST",
				data: data,
                
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Headers" : "Content-Type",
                    "Access-Control-Allow-Origin": "https://test.insigniaoverseas.com/",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
					Authorization:
						"Basic NzZkNmM2MjEtZTFlNC00YmMyLTg1NzYtZDk0N2E0ODVhZjAwOjc3YWU3ZDQ4LTI4NDQtNDNiMi1iYjI3LWViZWJhNzk2MDIxNw==",
					
				},
			}).then(function (data, status) {
                console.log(status)
				// $scope.response = "POST Response: " + data.form.json;
				// $scope.fullResponse = JSON.stringify(data);
			}, function(res){
                
                console.log(res)
            });
		};
		$scope.post();
		// $http({
		// 	url: "https://account-d.docusign.com/oauth/token",
		// 	method: "POST",
		// 	data: { grant_type: "authorization_code" },
		// 	headers: {
		// 		"Content-Type": "application/x-www-form-urlencoded",
		// 		"Access-Control-Allow-Headers": "accept, Content-Type",
		// 		"Access-Control-Allow-Methods": ["OPTIONS", "POST", "GET"],
		// 		Authorization:
		// 			"Basic NzZkNmM2MjEtZTFlNC00YmMyLTg1NzYtZDk0N2E0ODVhZjAwOjc3YWU3ZDQ4LTI4NDQtNDNiMi1iYjI3LWViZWJhNzk2MDIxNw==",
		// 		"Access-Control-Allow-Origin": "*",
		// 	},
		// }).then(function (response) {
		// 	$cookies.put("accessToken", response.data.access_token);
		// });
	},
]);
