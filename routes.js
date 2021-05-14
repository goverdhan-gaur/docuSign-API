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
			.when("/access", {
				templateUrl: "views/access.htm",
				controller: "accessController",
			})
			.when("/auth", {
				templateUrl: "views/landing.htm",
				controller: "authController",
			})
			.when("/index.html", {
				templateUrl: "views/landing.htm",
				controller: "testController",
			})
			.when("/user/:account_id", {
				templateUrl: "views/user.htm",
				controller: "user",
			});

		$locationProvider.html5Mode({
			enabled: false,
			requireBase: true,
			rewriteLinks: true,
		});
	},
]);
