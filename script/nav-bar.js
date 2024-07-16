

let closeBtn = document.querySelector("#close-menu img")
let menuPage = document.querySelector("#menu-bar")
let openBtn = document.querySelector("#right span img")



openBtn.addEventListener('click',()=>{
 menuPage.style.right=`0px`
})

closeBtn.addEventListener('click',()=>{
    menuPage.style.right=`-100vw`
   })