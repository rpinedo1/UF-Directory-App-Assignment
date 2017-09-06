angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.listing = {
      "code": "", 
      "name": "", 
      "coordinates": {
          "latitude": '', 
          "longitude": ''
      }, 
      "address": ""
    }   
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {

      $scope.listings.push({
        'code':$scope.code, 
        'name': $scope.name,
        'latitude': $scope.coordinates.latitude,
        'longitude': $scope.coordinates.longitude,
        'address': $scope.address 
      });
      $scope.code='';
      $scope.name='';
      $scope.coordinates.latitude='';
      $scope.coordinates.longitude='';
      $scope.address='';

    };
    $scope.deleteListing = function(index) {

        $scope.listings.splice($scope.listings.indexOf(index),1);
    };
    $scope.showDetails = function(index) {

        $scope.detailedInfo             = [];
        $scope.detailedInfo.coordinates = $scope.listings[index].coordinates;
        $scope.detailedInfo.address     = $scope.listings[index].address;
    };
  }
]);