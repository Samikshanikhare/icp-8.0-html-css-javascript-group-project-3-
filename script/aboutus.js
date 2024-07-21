
function fun(action)
        {
            const inputText=document.getElementById("btn1")
            const result=document.getElementById("info")
            const image=document.getElementById("imgage")
            if(action == '2020')
        {
            result.innerText="2020- Foundation of codeX . Codex, a renowned organization, has been influential in various sectors since its establishment.";
        }
        else if(action== '2021')
        {
            result.innerText="100+ students enroll to our course.  ";
            image.src="./../images/course-img-2.PNG"
        }
        else if(action== '2022')
        {
            result.innerText="100+ students enroll and  got placement in IT companies";
            image.src="./../images/course-img3.PNG"
        }
        else if(action== '2023')
        {
            result.innerText="500+ students learning through our course. Connected with 10+ IT companies for placement of our sttudent . So please enroll now to our course";
            image.src="./../images/course-img4.PNG"
        }
    }