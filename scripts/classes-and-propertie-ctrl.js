angular.module('ontology')
  .controller('ClassAndPropertyCtrl', function($scope, $http) {
    $http.get('documentation-ontology.json')
      .then(function(response) {
        $scope.classesAndProperties = response.data;
      });
  });