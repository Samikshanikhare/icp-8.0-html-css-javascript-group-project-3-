//generating cv
function generateCV() {
    document.getElementById("cv-template").style.display = "block";
    document.getElementById("fullName").innerHTML =
    document.getElementById("fullNameField").value;

// job title 
document.getElementById("jobTitle").innerHTML = 
document.getElementById("jobFiled").value;

// mobile number
document.getElementById("mobileNumber").innerHTML =
document.getElementById("mobileNumberField").value;

//email address
document.getElementById("emailAddress").innerHTML =
document.getElementById("emailAddressFiled").value;

// address
document.getElementById("address").innerHTML =
document.getElementById("addressField").value;

// date of birth
document.getElementById("dateOfBirth").innerHTML =
document.getElementById("dateofbirth").value;

}