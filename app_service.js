angular.module('app_service', [])
.factory('eitsAppService', function(){
    this.allEits = {
        
    };
    this.idCounter = 1;

    this.addEit = function addEit(eit){
        this.allEits[Object.keys(this.allEits).length]= eit;
        // this.idCounter += 1;
    };

    return {
        allEits:this.allEits,
        addEit:this.addEit
    };
});