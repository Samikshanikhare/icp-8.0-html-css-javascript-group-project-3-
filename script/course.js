let cart = document.querySelector(".cart");
let items = document.querySelector(".items");


const buyCourses = []

let flag = 0

cart.addEventListener("click", () => {
    if (flag == 0) {
        items.style.display = "none"
        flag = 1;
    } else if (flag == 1) {
        items.style.display = "flex"
        flag = 0;
        addtoitems(buyCourses)
    }
})


function addtocart(data) {
    buyCourses.push(data)
    console.log(buyCourses)
}

let buyitems = ""

function addtoitems(data) {
    console.log(data)
    data.forEach((element) => {
        buyitems += <span>course ${element.name} prise : ${element.price}</span>
    });
    items.innerHTML = buyitems
}