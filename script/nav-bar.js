

let closeBtn = document.querySelector("#close-menu img")
let menuPage = document.querySelector("#menu-bar")
let openBtn = document.querySelector("#right span img")
let checkBtn= document.getElementById("checkValue")
let body = document.getElementById("body")

/// editor paeg elements
  let textarea = document.querySelector("#txt1")
  let textarea2 = document.querySelector("#txt2")
  let textarea3 = document.querySelector("#txt3")


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
       textarea.style.backgroundColor='black'
       textarea2.style.backgroundColor="black"
       textarea3.style.backgroundColor="black"
    }else{
       body.classList.remove("black-theam")
       body.classList.add("white-theam")
       textarea.style.backgroundColor='white'
       textarea2.style.backgroundColor="white"
       textarea3.style.backgroundColor="white"
    }
})