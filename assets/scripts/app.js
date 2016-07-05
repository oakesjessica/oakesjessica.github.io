app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/projects", {
      templateUrl: "views/login.html",
    });

  $locationProvider.html5Mode(true);

}]);
