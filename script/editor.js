
let codeArea =  document.querySelector("#code")
let outPutArea = document.querySelector("#output")
let container = document.querySelector("#container")


let htmltxt =  document.querySelector(".HTML")
let cssTXt = document.querySelector(".CSS")
let jstxt = document.querySelector(".JS")
let outputScreen = document.querySelector("#outputScreen")

 let flag=0;

codeArea.addEventListener("dblclick",()=>{
     if(flag==0){
         outPutArea.style.left=`${-100}vw`
         flag++
     }else if(flag==1){
        outPutArea.style.left=`${100}vw`
         flag=0
     }
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

outputScreen.contentDocument.body.innerHTML=`<h1>hello</h1>`


outputScreen.contentDocument.head.innerHTML=`<style>h1{color:red;}</style>`

outputScreen.contentWindow.eval('let a=10 let b = 10 alert(a+b)')





  
