//validate module
var validateModule = (function () {

    //public method
    var validateProfile = function(e) {
      e.preventDefault();

      var valid=true;

      //display warning if firstName is not entered
      if(myForm.fName.value === "") {
      document.getElementById("fNameWarning").innerHTML="*First name required";
          valid = false;
      }

      //display warning if lastName is not entered
      if(myForm.lName.value === "") {
          document.getElementById("lNameWarning").innerHTML="*Last name required";
          valid=false;
      }

      //display warning if address is not entered
      if(myForm.address1.value === "") {
        document.getElementById("address1Warning").innerHTML = "*Address required";
        valid = false;
      }

      //display warning if city is not entered
      if(myForm.city.value === "") {
        document.getElementById("cityWarning").innerHTML = "*City required";
        valid = false;
      }

      //display warning if province is not selected
      if(myForm.province.options.selectedIndex === 0) {
        document.getElementById("provinceWarning").innerHTML = "*Province required";
        valid = false;
      }

      //display warning if country is not selected
      if(myForm.country.options.selectedIndex === 0) {
        document.getElementById("countryWarning").innerHTML = "*Country required";
        valid = false;
      }

      //alert user when form is filled correctly
      if(valid){
          alert("Thank you");
      }
      //alert if form submission is invalid
      else{

        alert("Invalid submission.")
      }

      return valid;

    };//end of public method

    //return public function
    return {
      validateProfile: validateProfile
    };

})(); //end of module pattern
