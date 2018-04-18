// Constants used for age calculation.
var MS_YEAR = 31556952000;
var MS_MONTH = 2629746000;
var MS_DAY = 86400000;

// Angular module, with a controller.
var app = angular.module('eitApp', ['app_service'])
  // 'Controller' is arbitrary. The name that matters is 'EitController'.
  app.controller('EitController', ['eitsAppService', function EitController(eitsAppService) {
    this.firstName = '';
    this.lastName = '';
    this.gender = null;
    this.dob = null;
    this.getFullName = function generateName() {
      return this.firstName + ' ' + this.lastName;
    };
    
    this.getAge = function calculateAge() {
      
      if (!this.dob) {
        return '';
      }
      
      var now = new Date();
      
      if (this.dob > now) {
        return 'Please enter a date in the past.'
      }
      
      var y, m, d;

      var remainder = (now - this.dob);
      y = Math.floor(remainder / MS_YEAR);
      remainder = remainder % MS_YEAR;
      m = Math.floor(remainder / MS_MONTH);
      remainder = remainder % MS_MONTH;
      d = Math.floor(remainder / MS_DAY);
      
      return y + " years, " + m + " months, " + d + " days";
    };

    this.newEit = function newEit(){
      var eitObject = {
        firstName : this.firstName,
        lastName : this.lastName,
        gender : this.gender,
        dob : this.dob
      }
      return eitsAppService.addEit(eitObject);
    };

    this.listEits = function listEits() {
      return eitsAppService.allEits;
    };
  }]);

  app.controller('listAllEit', ['eitsAppService', function listAllEit(eitsAppService){
    this.listEits = function listEits() {
      return eitsAppService.allEits;
    };
    // this.setCurrentEit = function setCurrentEit(eitId){
    //   eitsAppService.setCurrentEit(eitId)
    // };
  }]);

  app.controller('eitDetails', ['eitsAppService', function eitDetails(eitsAppService){
    this.getEitDetails = function getEitDetails(){
      return eitsAppService.currentEit;
    };
  }]);