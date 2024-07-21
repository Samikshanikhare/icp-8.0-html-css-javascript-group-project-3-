
let movediv = document.querySelector("#move-div")
let page2 = document.querySelector("#page2")
let txt = document.querySelector("#overlay h6")


document.addEventListener("mousemove",(e)=>{
       movediv.style.left=`${e.x- 100 }px`
       movediv.style.top=`${e.y -100}px`
})


let flag =0 

page2.addEventListener("click",()=>{
       if(flag==0){
             txt.innerText =`click to pause video`
             flag =1 ;
       }else if(flag==1){
            txt.innerText =`click to play video`
            flag =0;
       }
})

// page 4 animation...

let maindiv = document.querySelector("#more-fea")
let pic= document.querySelector("#pic")
let windosize = window.innerWidth /2

window.addEventListener("resize",()=>{
       windosize = window.innerWidth /2
})

maindiv.addEventListener("mousemove",(e)=>{
   
 if(e.x<windosize){
        pic.src= "../images/bg4.png"
 }else{
       pic.src= "../images/bg41.png"
 }
 
        pic.style.left=`${1-e.x*0.1}px`
        pic.style.top=`${1-e.y*0.1}px`

})


//hndle span txt

function changtxt(text){
        let txtContainer = document.querySelector("#more-fea span")
        txtContainer.innerText=`Know more about ${text} ...`
}

