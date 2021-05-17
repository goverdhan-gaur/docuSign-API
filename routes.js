app.config([
	"$locationProvider",
	"$routeProvider",
	"$qProvider",

	function ($locationProvider, $routeProvider, $qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
		$locationProvider.hashPrefix("");
		// Setting Routes
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
				templateUrl: "views/user.htm",
				controller: "mainController",
			})
			.when("/logout", {
				templateUrl: "views/logout.htm",
				controller: "logoutController",
			})
			.when("/send/:env", {
				templateUrl: "views/send.htm",
				controller: "sendController",
			});

			// 
		$locationProvider.html5Mode({
			enabled: false,
			requireBase: true,
			rewriteLinks: true,
		});
	},
]);
