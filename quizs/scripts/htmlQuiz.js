
let timediv=document.querySelector(".time")

let i=0

setInterval(()=>{
  addTime(i)
  i++
},1000)
 
function  addTime(time) {
    var minutes = Math.floor((time % 3600) / 60);
    let sec = time%60
    let min = minutes<10 ? `0${minutes}` : `${minutes}`
    timediv.innerHTML=`<i class="ri-time-fill"></i>${min}:${ sec<10 ? "0"+sec : sec} `
     
}



let htmlQuestions = [
  {
      question: "What does HTML stand for?",
      options: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Tool Markup Language"
      ],
      answer: "Hyper Text Markup Language"
  },
  {
      question: "Which HTML tag is used to define an unordered list?",
      options: [
          "<ul>",
          "<ol>",
          "<li>",
          "<list>"
      ],
      answer: "<ul>"
  },
  {
      question: "Which attribute is used to define inline styles in HTML?",
      options: [
          "class",
          "style",
          "font",
          "styles"
      ],
      answer: "style"
  },
  {
      question: "Which element is used to link an external JavaScript file?",
      options: [
          "<script>",
          "<js>",
          "<link>",
          "<a>"
      ],
      answer: "<script>"
  },
  {
      question: "What does the <img> tag represent in HTML?",
      options: [
          "An image",
          "A link",
          "A division",
          "A table"
      ],
      answer: "An image"
  },
  {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: [
          "<href>",
          "<a>",
          "<link>",
          "<hyperlink>"
      ],
      answer: "<a>"
  },
  {
      question: "Which attribute is used to specify a target URL for a hyperlink?",
      options: [
          "url",
          "link",
          "src",
          "href"
      ],
      answer: "href"
  },
  {
      question: "Which tag use to link pages ?",
      options: [
          "<a>",
          "<link>",
          "<join>",
          "<page>"
      ],
      answer: "<a>"
  },
  {
      question: "Which tag is used to define a table in HTML?",
      options: [
          "<table>",
          "<tr>",
          "<td>",
          "<th>"
      ],
      answer: "<table>"
  },
  {
      question: "Which tag is used to define a paragraph in HTML?",
      options: [
          "<p>",
          "<paragraph>",
          "<par>",
          "<para>"
      ],
      answer: "<p>"
  }
];


let container = document.querySelector("#quecontainer")
let nxtBtn = document.querySelector("#btn")

let questionCount = 0;
let total =0

if(questionCount< htmlQuestions.length-1){

      nxtBtn.addEventListener("click",()=>{
               
      let question =  document.querySelector(".que")
      let option1 = document.querySelector(".a1")
      let option2 = document.querySelector(".a2")
      let option3 = document.querySelector(".a3")
      let option4 = document.querySelector(".a4")
        // adding question into dom
          
           question.innerText=`${htmlQuestions[questionCount].question}`
           option1.innerText=`${htmlQuestions[questionCount].options[0]}`
           option2.innerText=`${htmlQuestions[questionCount].options[1]}`
           option3.innerText=`${htmlQuestions[questionCount].options[2]}`
           option4.innerText=`${htmlQuestions[questionCount].options[3]}`
            
              
              let answer= htmlQuestions[questionCount].answer  
              option1.addEventListener("click",()=>{
                  if(`${option1.innerText}`== answer){
                     option1.classList.add("wright")
                     total++
                  }else{
                    option1.classList.add("wrong")
                
                  }
              })

              option2.addEventListener("click",()=>{
                if(`${option2.innerText}`== answer){
                   option2.classList.add("wright")
                   total++
                }else{
                  option2.classList.add("wrong")
                }
            })

            option3.addEventListener("click",()=>{
                if(`${option3.innerText}`== answer){
                   option3.classList.add("wright")
                   total++
                }else{
                  option3.classList.add("wrong")
                }
            })

            option4.addEventListener("click",()=>{
                if(`${option4.innerText}`== answer){
                   option4.classList.add("wright")
                   total++
                }else{
                  option4.classList.add("wrong")
                }
            })
               
           nxtBtn.addEventListener("click",()=>{
              option1.classList.remove("wright")
              option2.classList.remove("wright")
              option3.classList.remove("wright")
              option4.classList.remove("wright")
              option1.classList.remove("wrong")
              option2.classList.remove("wrong")
              option3.classList.remove("wrong")
              option4.classList.remove("wrong")
           })

     document.querySelector("#total").innerHTML=`<i class="ri-arrow-right-up-fill"></i> ${total}/10`
      questionCount++

     })

}
 

