'use strict';

angular.module('myApp.news-feed', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/news-feed', {
        templateUrl: 'news-feed/templates/news-feed.html',
        controller: 'newsFeedCtrl'
    });
}])

.controller('newsFeedCtrl', ['newsFeedApi',function(newsFeedApi) {
        newsFeedApi.get().$promise.then(function(response){
            console.log(response);
        });
}]);