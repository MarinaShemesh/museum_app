     angular.module('museumApp')
      .service('museumService', museumService);

     museumService.$inject = ['$http'];
     function museumService($http){

       const service = this;

       service.getMuseumInfo = function() {
          const response = $http({
            method: "GET",
            url: ("https://www.rijksmuseum.nl/api/nl/collection?key=KK2itac9&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614")
          });

          return response;
 };

}