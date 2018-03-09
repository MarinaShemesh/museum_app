console.log('this is the controller');

angular.module('museumApp')
 .controller('museumController', museumController);
     
     museumController.$inject = ['museumService', '$scope'];
      function museumController (museumService, $scope){
        

        const vm = this;
             museumService.getInfo()
             .then(function (museumData){
             
             vm.notes = museumData.data;
             console.log('vm.notes:', vm.notes);

     });

         
}//end of controller