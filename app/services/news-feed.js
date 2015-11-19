(function(){
    angular.module('myApp').factory('newsFeedApi', newsFeedApi);

    //newsFeedApi.$inject[$resource];

    function newsFeedApi($resource) {
        var serviceUrl = 'http://localhost:3000/';
        var service = $resource(serviceUrl,{},{
            getByActionStart:{
                method:'GET',
                url:serviceUrl+'users',
                params:{action:'@action',start:'@start'}
            },
            get:{
                method:'GET',
                url:serviceUrl+'news-feed',
                params:{}
            }
        });
        return service;
    }
})();

