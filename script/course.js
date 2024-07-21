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
    }
})


function addtocart(data) { 
   buyCourses.push(data)
}



let buyitems = ""
  



function addtoitems(data) {

    if (!data) {
        buyitems = `<span> Not yet buy</span>`
        items.innerHTML = buyitems
    }

    else {
        data.forEach(element => {
            buyitems += `<span>You buy ${element.name} and price ${element.price}</span>`
        })

        items.innerHTML = buyitems
    }

}


