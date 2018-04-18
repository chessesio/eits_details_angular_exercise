angular.module('app_service', [])
.factory('eitsAppService', function(){
    this.allEits = {};
    this.currentEit = {
        
    };

    this.addEit = function addEit(eit){
        this.allEits[Object.keys(this.allEits).length]= eit;
    };

    this.setCurrentEit = function setCurrentEit(eitId){
        this.currentEit = eitId;
    };

    this.getCurrentEit = function getCurrentEit(){
        return this.currentEit;
    };

    return {
        allEits:this.allEits,
        addEit:this.addEit,
        setCurrentEit:this.setCurrentEit,
        getCurrentEit:this.currentEit,
        currentEit:this.currentEit,
    };
}); 