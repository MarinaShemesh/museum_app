angular.module('museumApp')
             .controller('museumController', museumController);
     
     museumController.$inject = ['museumService', '$scope'];
                                  
      function museumController (museumService, $scope){
      

       const vm = this;

                       
            const onSuccess = function(response){
             console.log('response.data:', response.data);

            vm.data = response.data;
             console.log('vm.data:', vm.data);
            }

            const onFailure = function(reason){
            console.log("There was some type of mistake.")
            }
          
            vm.getMuseumInfo = function() {

             museumService.getMuseumInfo()
             .then(onSuccess, onFailure);
                     
            }

      }//end of controller
