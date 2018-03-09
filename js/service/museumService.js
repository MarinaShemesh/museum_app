  angular.module('museumApp')
      .service('museumService', museumService);

     museumService.$inject = ['$http'];
     function museumService($http){

      const service = this;
      
      const keyNumber = "fpGQTuED";
      const ps = 9;
      const p = 2;
      const museumUrl = "https://www.rijksmuseum.nl/api/en/collection?&key=" 
                        + keyNumber + "&format=json&ps=" + ps + "&p=" + p;

       service.getInfo = function() {
          const response = $http({
            method: "GET",
            url: (museumUrl)
          });

      service.newData = function(){
          const p = 3;
          service.getInfo();
      }

          return response;
 };

 
 }//end of service

