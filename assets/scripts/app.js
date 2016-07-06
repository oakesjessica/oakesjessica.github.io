var app = angular.module("personalWebsite", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/resume", {
      templateUrl: "resume.html",
    })
    .when("/projects", {
      templateUrl: "projects.html",
    });

  $locationProvider.html5Mode(true);

}]);
