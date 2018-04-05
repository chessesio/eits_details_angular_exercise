angular.module('eit_details_app', [])
.controller('EitDetailsController', function EitDetailsController(){
    this.first_name = 'Enter First Name';
    this.last_name = 'Enter Last Name';
    this.gender = null;
    this.date_of_birth = null;
    this.name = function full_name(this.first_name, last_name){
        return this.first_name + ' ' + this.last_name;
    };
    this.age = function age_calculation(this.date_of_birth){
        date_today =  new Date();
        return this.date_of_birth>0?date_today.getFullYear()-(date_of_birth | date : 'yyyy'):"Enter date of birth";
    };

});