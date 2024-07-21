const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

let loginemail=document.getElementById('loginemail')



//function
const arr = [{
    email: "user@gmail.com",
    password: "user"

}]
function checkuser() {

    const msg = document.getElementById('message')
    const page = document.getElementById('page')
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email == email && arr[i].password == password) {
            page.setAttribute("href", "https://codee-x.netlify.app/")
            msg.innerHTML = `login sucessful     `

        }
        else {
            msg.innerHTML = `invalid email or pass please        <span onclick="User('signup')">signup</span>`
        }

    }
}

function data(){
    const signemail = document.getElementById('signemail').value
    const signpassword = document.getElementById('signpassword').value

arr.push({
    email:`${signemail}`,
    password:`${signpassword}`
})
console.log(arr)

}