(function(){
  angular.module("stitchlabs").service('productService', ['dataService',function (dataService) {

    this.getProducts=function (){
      var url = "?path=/admin/products.json"
      var products=dataService.get(url).then(function(data){
        return data
      })
      return products

    }
  }])
}())