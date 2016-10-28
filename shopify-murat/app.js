(function(){
  angular.module("stitchlabs",["ui.router"])
  angular.module("stitchlabs").
  config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/products")

      $stateProvider
      .state('products', {
        url:'/products',
        templateUrl: 'templates/product.html',
        controller: 'productCtrl',
        resolve: {
        products: function($stateParams, productService) {
          return productService.getProducts().then(function(data){return data})
          }
        }
      })
      .state('products.detail', {
          url: '^/product/:id',
          views: {
            '@': {
              templateUrl: 'templates/product.detail.html',
              controller: 'productDetailCtrl'
            }
          }

      })
      .state('newProduct',{
        url: '^/products/new',
        templateUrl: 'templates/product.new.html',
        // controller: 'productCtrl'
      })
    });
}())