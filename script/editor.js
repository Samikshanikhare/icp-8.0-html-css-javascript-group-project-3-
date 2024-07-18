
let codeArea =  document.querySelector("#code")
let outPutArea = document.querySelector("#output")
let container = document.querySelector("#container")
let htmltxt =  document.querySelector(".HTML")
let cssTXt = document.querySelector(".CSS")
let jstxt = document.querySelector(".JS")
let outputScreen = document.querySelector("#outputScreen")
let  backbtn = document.querySelector("#output i")
let Ouputbtn = document.querySelector("#opBtn")



 let flag=0;

codeArea.addEventListener("dblclick",()=>{
     if(flag==0){
         outPutArea.style.left=`${-100}vw`
         flag=1
     }else if(flag==1){
        outPutArea.style.left=`${100}vw`
         flag=0;
     }
  })

 Ouputbtn.addEventListener("click",()=>{
  outPutArea.style.left=`${-100}vw`
})

  backbtn.addEventListener("click",()=>{
        outPutArea.style.left=`${100}vw`
  })


htmltxt.addEventListener("click",()=>{
    textarea.style.display='block'
    textarea2.style.display="none"
    textarea3.style.display="none"
})

cssTXt.addEventListener("click",()=>{
    textarea.style.display='none'
    textarea2.style.display="block"
    textarea3.style.display="none"
})


jstxt.addEventListener("click",()=>{
    textarea.style.display='none'
    textarea2.style.display="none"
    textarea3.style.display="block"
})

// adding output in iframe...


textarea.addEventListener("keyup",()=>{ 
  outputScreen.contentDocument.body.innerHTML=`${textarea.value}`
})

textarea2.addEventListener("keyup",()=>{ 
  outputScreen.contentDocument.head.innerHTML=`<style>${textarea2.value}</style>`
})





textarea3.addEventListener("keyup",()=>{ 
let word = textarea3.value
outputScreen.contentWindow.eval(word)

})


// clearing script adding erros...

setInterval(() => {
  console.clear()
}, 500);



window.addEventListener("beforeunload",(e)=>{
    e.preventDefault()
})




  
