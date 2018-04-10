angular.module('app_service', [])
.factory('eitsAppService', function(){
    var allEits = [];

    var addEit = function(eit){
        return allEits.push(eit)
    };

    return {
        addEit:addEit,
        allEits:allEits
    };
});