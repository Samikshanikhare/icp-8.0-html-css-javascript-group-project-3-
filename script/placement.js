
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
       requiter_heading.span.style.color = "white"
    }
})