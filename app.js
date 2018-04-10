// Constants used for age calculation.
var MS_YEAR = 31556952000;
var MS_MONTH = 2629746000;
var MS_DAY = 86400000;

// Angular module, with a controller.
angular.module('eitApp', ['app_service'])
  // 'Controller' is arbitrary. The name that matters is 'EitController'.
  .controller('EitController', ['eitsAppService', function EitController(eitsAppService) {
    this.gName = '';
    this.lName = '';
    this.dob = null;
    this.getFullName = function generateName() {
      return this.gName + ' ' + this.lName;
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
      return eitsAppService.addEit(this.getFullName());
    };

    
    this.listEits = function listEits() {
      return eitsAppService.allEits;
    };
  }]);