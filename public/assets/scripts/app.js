var app = angular.module("personalWebsite", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/resume", {
      templateUrl: "views/resume.html",
    })
    .when("/projects", {
      templateUrl: "views/projects.html",
    });

  $locationProvider.html5Mode(true);

}]);
