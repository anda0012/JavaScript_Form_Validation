//form element events

//clear firstNameWarning
document.getElementById("fName").addEventListener("blur", function() {
  if(this.value !== ""){
        fNameWarning.innerHTML = "";
  }
});

//clear lNameWarning
document.getElementById("lName").addEventListener("blur", function() {
  if (this.value !== "") {
        lNameWarning.innerHTML = "";
  }
});

//clear address warning
document.getElementById("address1").addEventListener("blur", function() {
  if (this.value !== "") {
        address1Warning.innerHTML = "";
  }
});

//clear city warning
document.getElementById("city").addEventListener("blur", function() {
  if (this.value !== "") {
        cityWarning.innerHTML = "";
  }
});

//clear province warning

document.getElementById("province").addEventListener("click", function() {
  if (myForm.province.options.selectedIndex !== 0) {
        provinceWarning.innerHTML = "";
  }
});

//clear country warning
document.getElementById("country").addEventListener("click", function() {
  if (myForm.country.options.selectedIndex !== 0) {
        countryWarning.innerHTML = "";
  }
});

//submit Form
document.myForm.addEventListener("submit", validateModule.validateProfile);
