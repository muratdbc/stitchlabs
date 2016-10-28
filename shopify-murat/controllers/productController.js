(function(){
  angular.module('stitchlabs').controller('productCtrl', ['$scope','products',function ($scope,products) {
    $scope.products=products.data.products
    console.log($scope.products)
  }])
}())