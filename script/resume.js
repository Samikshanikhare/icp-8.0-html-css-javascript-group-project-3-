//generating cv
function generateCV() {
    document.getElementById("cv-template").style.display = "block";
    document.getElementById("fullName").innerHTML =
      document.getElementById("fullNameField").value;
}