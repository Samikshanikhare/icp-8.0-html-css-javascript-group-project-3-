
let user = JSON.parse(localStorage.getItem("logedInUser"))
let courses = JSON.parse(localStorage.getItem("cartItems"))
console.log(courses)
setInfo(user)


let instructur =["priti","neha","mansi","vaishnavi","samkisha","ruchi","sarthak","rupesh","mahesh","tanmay"]

createCards(courses)

function setInfo() {

    document.querySelector(".name").innerText = `hey ${user.name}`
    document.querySelector(".email").innerText = `${user.email}`
    let profilepic = document.querySelector("#profile img")
    profilepic.src = user.gender == "Male" ? "../images/male.svg" : "../images/female.svg"
}

function createCards(courses) {

    let createCouses = ""

    if (courses.length === 0) {
        console.log("hii")
    } else {

        courses.forEach((course) => {

            createCouses += `<div class="course">
                    <span><i class="ri-live-fill"></i> ${course.name}</span>
                    <span><i class="ri-calendar-fill"></i>buy on ${course.dateAdded}</span>
                    <span><i class="ri-price-tag-3-fill"></i>price ${course.price}</span>
                    <span><i class="ri-check-double-line"></i>Teacher:${instructur[Math.floor(Math.random()*10)]}</span>
                    <a href="#">see lectures</a>
                </div>`
        });

    }

    document.querySelector("#course-container").innerHTML = createCouses

}