app.config([
	"$locationProvider",
	"$routeProvider",
	"$qProvider",
	"$resourceProvider",
	"$httpProvider",

	function (
		$locationProvider,
		$routeProvider,
		$qProvider,
		$resourceProvider,
		$httpProvider
	) {
		$qProvider.errorOnUnhandledRejections(false);
		$locationProvider.hashPrefix("");

		$routeProvider
			.when("/", {
				templateUrl: "views/landing.htm",
				controller: "mainController",
			})
			.when("/access?:code", {
				templateUrl: "views/access.htm",
				controller: "accessController",
			})
			.when("/user/:account_id", {
				templateUrl: "views/user.htm",
				controller: "user",
			});
            
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true,
			rewriteLinks: true,
		});
	},
]);
