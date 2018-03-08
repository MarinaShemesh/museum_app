console.log('this is the controller');

angular.module('museumApp')
 .controller('museumController', museumController);
     
     museumController.$inject = ['museumService', '$scope'];
      function museumController (museumService, $scope){
        
        const vm = this;

           const onSuccess = function(response){
            vm.data = response.data;
            console.log('vm.data:', vm.data);
            }

            const onFailure = function(reason){
            console.log("There was some type of mistake.")
            }
          
            vm.getQuote = function() {

             museumService.getQuote()
             .then(onSuccess, onFailure);
                     
            }

    }
      
