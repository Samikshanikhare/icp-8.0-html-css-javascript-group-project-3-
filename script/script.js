
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

