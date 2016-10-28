(function(){
  angular.module("stitchlabs").service('dataService', ['$http',function ($http) {
    var urlBase="http://localhost:3030/shopify/get"
    this.get=function(url){
       var data = $http.get(urlBase+url).then(function(response){
        return response
       })
       return data
    }

  }])
}())