console.log('this is the refreshcontroller');

angular.module('museumApp')
 .controller('refreshController', refreshController);
     
     refreshController.$inject = ['museumService', '$scope'];
      function refreshController (museumService, $scope){
        
       const vm = this;
        
           const onSuccess = function(response){
            vm.notes = response.data;
            console.log('newvm.notes:', vm.notes);
                     
            }

            const onFailure = function(reason){
            console.log("There was some type of mistake.")
            }
          
            vm.doRefresh = function() {
             alert("you clicked the refresh button");
             museumService.newData()
             .then(onSuccess, onFailure);
                     
            }
 
          
}//end of controller