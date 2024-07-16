

let closeBtn = document.querySelector("#close-menu img")
let menuPage = document.querySelector("#menu-bar")
let openBtn = document.querySelector("#right span img")
let checkBtn= document.getElementById("checkValue")
let body = document.getElementById("body")



openBtn.addEventListener('click',()=>{
 menuPage.style.right=`0px`
})

closeBtn.addEventListener('click',()=>{
    menuPage.style.right=`-100vw`
   })


checkBtn.addEventListener('click',function(e){

    if(checkBtn.checked){
       body.classList.remove("white-theam")
       body.classList.add("black-theam")
    }else{
       body.classList.remove("black-theam")
       body.classList.add("white-theam")
    }
})