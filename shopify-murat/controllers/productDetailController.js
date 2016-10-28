(function(){
  angular.module('stitchlabs').controller('productDetailCtrl', ['$scope','$stateParams','products',function ($scope,$stateParams,products) {
    $scope.product=products.data.products[$stateParams.id]
    console.log($scope.product)
  }])
}())