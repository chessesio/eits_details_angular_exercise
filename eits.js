angular.module('eit_details_app', [])
.controller('EitDetailsController', function EitDetailsController(){
    this.first_name = '';
    this.last_name = '';
    this.gender = null;
    this.date_of_birth = null;
    this.full_name = function full_name(){
        return this.first_name + ' ' + this.last_name;
    };
    
    this.calculate_age = function calculate_age(){
        date_today =  new Date();
        if (this.date_of_birth) {
            var age_ms = date_today - new Date(this.date_of_birth);
            var age_year = Math.floor(age_ms/31540000000);
            var age_year_remainder = (age_ms%31540000000);
            var age_months = Math.floor(age_year_remainder/2628000000);
            var age_months_remainder = (age_year_remainder%2628000000);
            var age_weeks = Math.floor(age_months_remainder/604800000);
            var age_weeks_remainder = (age_months_remainder%604800000);
            var age_days = Math.floor(age_weeks_remainder/86400000);
            var age_days_remainder = (age_weeks_remainder%86400000);
            var age_hours = Math.floor(age_days_remainder/3600000);
            var age_hours_remainder = (age_days_remainder%3600000);
            var age_minutes = Math.floor(age_hours_remainder/6000);
            var age_minutes_remainder = (age_hours_remainder%6000);
            var age_seconds = Math.floor(age_minutes_remainder/100);
            var age_miliseconds = (age_minutes_remainder%100);
          return age_year + ' years ' + age_months + ' months ' + age_weeks + ' weeks ' + age_days + 'days ' + age_hours + ' hours ' + age_minutes +' minutes ' + age_seconds + ' s ' + age_miliseconds + ' ms';
        }
        else { return ' ';
        }
    };
});




    // this.calculate_age = function calculate_age(){
    //     date_today =  new Date();
    //     if (this.date_of_birth) {
    //       age = date_today.getFullYear() - this.date_of_birth.getFullYear();
    //       return age;
    //     }
    //     else { return ' ';
    //     }
    // };
