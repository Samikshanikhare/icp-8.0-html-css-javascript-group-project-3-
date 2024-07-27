


let userdetails=[]




function savee() {
    let name = document.getElementById('_userName').value
    let surname = document.getElementById('_userName1').value
    let age = document.getElementById('_userAge').value
    let phone = document.getElementById('_userPhone').value
    let email = document.getElementById('_userEmail').value
    let pass = document.getElementById('_userPass').value

    let e = document.getElementById("_userGender");
    let value = e.value;
    let text = e.options[e.selectedIndex].text;
    console.log(phone.length)
}
document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())


function validate(error, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = error
    setTimeout(function () {
        notification.style.display = "none"


    }, time)
}
validate('wrong name', 2000)


